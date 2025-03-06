import { Hero } from 'app/app/components/home/Hero';
import { Description } from 'app/app/components/home/Description';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}