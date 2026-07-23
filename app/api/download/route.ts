import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse('CV File not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="Muhammad_Tayyab_CV.pdf"',
        'Content-Type': 'application/pdf',
        'Content-Length': fileBuffer.byteLength.toString(),
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    console.error("Error downloading CV:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
