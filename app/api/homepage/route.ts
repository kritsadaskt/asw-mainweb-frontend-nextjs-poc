import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const content = await fetch(`${process.env.STRAPI_API}/homepage?populate[home_hero_banners][populate][0]=slide_image_mobile`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    });
    
    if (!content.ok) {
      throw new Error('Failed to fetch data from Strapi');
    }
    
    const data = await content.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
