export const metadata = {
  title: 'Yash Ambavade - Data Analyst Portfolio',
  description: 'Professional portfolio of Yash Ambavade, Data Analyst',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
