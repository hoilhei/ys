import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const inquiryUrl = import.meta.env.VITE_NEW_FAMILY_INQUIRY_URL;
const inputStyle = 'mt-1 block w-full min-w-0 rounded-lg border border-brand-gold/35 px-3 py-2 text-base font-normal focus:outline-brand-sage';

export default function NewFamilyInquiryForm() {
  const [showContact, setShowContact] = useState(false);

  return (
    <form
      aria-labelledby="new-family-inquiry-title"
      method="post"
      action={inquiryUrl}
      onSubmit={event => {
        const form: HTMLFormElement = event.currentTarget;
        if (!new FormData(form).has('purpose')) {
          event.preventDefault();
          const firstPurpose = form.querySelector<HTMLInputElement>('input[name="purpose"]');
          firstPurpose?.setCustomValidity('문의목적을 하나 이상 선택해 주세요.');
          firstPurpose?.reportValidity();
          return;
        }
        if (!inquiryUrl) {
          event.preventDefault();
          setShowContact(true);
        }
      }}
      className="min-w-0 rounded-[2rem] border border-brand-gold/15 bg-white p-5 sm:p-6 text-left text-brand-brown shadow-sm"
    >
      <span className="text-xs font-bold text-brand-sage tracking-[0.15em]">STEP 5</span>
      <h3 id="new-family-inquiry-title" className="mt-1 flex items-center gap-2 text-2xl font-bold">
        문의신청 <ArrowRight className="size-5 text-brand-sage" aria-hidden="true" />
      </h3>
      <p className="mt-2 text-base leading-relaxed text-brand-brown/65">아래 내용을 작성해 주시면 담당 사역자가 연락드립니다.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm font-medium">
        <label>이름
          <input className={inputStyle} name="name" autoComplete="name" required />
        </label>
        <label>연락처
          <input className={inputStyle} name="phone" type="tel" autoComplete="tel" required />
        </label>
        <fieldset className="min-w-0 sm:col-span-2" onChange={event => {
          event.currentTarget.querySelector('input')?.setCustomValidity('');
        }}>
          <legend className="mb-1">문의목적</legend>
          <div className="flex flex-wrap gap-x-4">
            {['예배참석', '상담요청', '교회등록'].map(purpose => (
              <label key={purpose} className="inline-flex min-h-10 items-center gap-1.5 cursor-pointer">
                <input type="checkbox" name="purpose" value={purpose} className="size-4 accent-brand-sage" />
                {purpose}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-3 text-right">
        <button type="submit" className="w-full rounded-full bg-brand-brown px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-sage cursor-pointer">신청하기</button>
      </div>
      {showContact && (
        <p role="status" className="mt-3 text-sm">
          온라인 접수 준비 중입니다. 교회 사무실(<a className="underline" href="tel:0226028002">02-2602-8002</a>)로 문의해 주세요.
        </p>
      )}
    </form>
  );
}
