import "./globals.css";
import ThemeProviderWrapper from "@/components/theme-provider";



export const metadata = {
  title: "WorkSync",
  description: "WorkSync is a project management tool that helps you manage your projects and tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}


//we are using this to wrap the app in the theme provider so that we can use the theme provider in the app. we need dark mode in the app. 
//we are using next-themes to implement dark mode in the app. 
