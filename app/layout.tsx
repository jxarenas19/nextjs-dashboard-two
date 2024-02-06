import './ui/global.css'
import {montserrat} from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        
      </div>
    
      <body className={`${montserrat.className} antialiased`}>
          {children}
          <footer className='p-10 flex justify-center items-center'>Abajo</footer>
      </body>
      
    </html>
  );
}
