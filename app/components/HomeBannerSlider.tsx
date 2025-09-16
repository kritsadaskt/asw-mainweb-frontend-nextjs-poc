"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import 'swiper/css';

interface Banner {
  id: number;
  slide_image_mobile: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface HomepageData {
  data: {
    home_hero_banners: Banner[];
  };
}

export default function HomeBannerSlider() {
  const [content, setContent] = useState<HomepageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/homepage');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setContent(data);
        console.log('Fetched data:', data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (content?.data?.home_hero_banners) {
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000,
        },
      });
    }
  }, [content]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!content?.data?.home_hero_banners) return <div>No banners found</div>;

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {content.data.home_hero_banners.map((banner: Banner) => (
          <div key={banner.id} className="swiper-slide">
            <Image 
              src={`${process.env.NEXT_PUBLIC_STRAPI_API}${banner.slide_image_mobile.url}`} 
              alt={banner.slide_image_mobile.alt || `Banner image ${banner.id}`} 
              width={banner.slide_image_mobile.width} 
              height={banner.slide_image_mobile.height} 
              className="w-auto h-auto"
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}