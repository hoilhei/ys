import { useLayoutEffect,useRef } from 'react';
import { ArrowUp,Cross,UserPlus,MessageSquare } from 'lucide-react';

export default function FloatingHelp({ onPrayerRequest }: { onPrayerRequest: () => void }) {
  const floatingHelpRef=useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const labels=floatingHelpRef.current?.querySelectorAll<HTMLElement>('.floating-help-button span');
    const observer=new ResizeObserver(entries => {
      for(const entry of entries) {
        (entry.target.parentElement as HTMLElement)?.style.setProperty('--expanded-width',`${Math.ceil(entry.contentRect.width)+32}px`);
      }
    });
    labels?.forEach(label => observer.observe(label));
    return () => observer.disconnect();
  },[]);

  return (<nav ref={floatingHelpRef} className="floating-help" aria-label="신앙과 새가족 빠른 안내">
    <a className="floating-help-button floating-help-jesus" href="#우리가믿는예수님" aria-label="예수님은 누구시죠?">
      <Cross size={22} aria-hidden="true" />
      <span>예수님은 누구시죠?</span>
    </a>
    <a className="floating-help-button floating-help-welcome" href="#새가족안내" aria-label="새로 오셨다면?">
      <UserPlus size={22} aria-hidden="true" />
      <span>새로 오셨다면?</span>
    </a>
    <button className="floating-help-button floating-help-prayer" type="button" aria-label="고민이 있나요?" onClick={onPrayerRequest}>
      <MessageSquare size={22} aria-hidden="true" />
      <span>고민이 있나요?</span>
    </button>
    <button
      className="floating-help-button floating-help-top"
      type="button"
      aria-label="맨 위로 올라가기"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches? 'instant':'smooth'
      })}
    >
      <ArrowUp size={22} aria-hidden="true" />
      <span>맨 위로 올라가기</span>
    </button>
  </nav>);
}
