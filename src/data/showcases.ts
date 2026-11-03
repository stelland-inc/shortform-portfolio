import type { Work } from '../components/Showcase'
import type { Locale } from '../i18n/locale'

// Supabase Storage(qr-codes 버킷, public)에 업로드된 QR코드 이미지
const QR_BASE =
  'https://imyjohoymzmbaytkhhqk.supabase.co/storage/v1/object/public/qr-codes'
// Supabase Storage(thumbnails 버킷, public)에 업로드된 썸네일 이미지
const THUMB_BASE =
  'https://imyjohoymzmbaytkhhqk.supabase.co/storage/v1/object/public/thumbnails'
// Supabase Storage(videos 버킷, public)에 업로드된 원본 영상
const VIDEO_BASE =
  'https://imyjohoymzmbaytkhhqk.supabase.co/storage/v1/object/public/videos'
// 오디오웹툰 섹션 전용: 별도 Supabase 프로젝트의 public 버킷
const AUDIO_THUMB_BASE =
  'https://tmamddsbsnfekrosrnzs.supabase.co/storage/v1/object/public/thumbnails'
const AUDIO_VIDEO_BASE =
  'https://tmamddsbsnfekrosrnzs.supabase.co/storage/v1/object/public/videos'

type LocalizedWork = {
  title: Record<Locale, string>
  platform?: Record<Locale, string>
  tone: string
  qrUrl: string
  posterUrl: string
  linkUrl?: string
  videoUrl?: string
}

function localize(work: LocalizedWork, locale: Locale): Work {
  return {
    title: work.title[locale],
    platform: work.platform?.[locale],
    tone: work.tone,
    qrUrl: work.qrUrl,
    posterUrl: work.posterUrl,
    linkUrl: work.linkUrl,
    videoUrl: work.videoUrl,
  }
}

// CATEGORY 01 — AI 숏폼 애니메이션 제작 샘플
const AI_SAMPLES_RAW: LocalizedWork[] = [
  {
    title: { ko: '〈팔찌의 주인〉', en: "〈The Bracelet's Owner〉", ja: '〈ブレスレットの主〉' },
    tone: 'from-amber to-star',
    posterUrl: `${THUMB_BASE}/ai-1.png`,
    qrUrl: `${QR_BASE}/ai-3.png`,
    videoUrl: `${VIDEO_BASE}/ai-3.mp4`,
  },
  {
    title: { ko: '〈SANTA〉', en: '〈SANTA〉', ja: '〈SANTA〉' },
    tone: 'from-ink to-accent-ink',
    posterUrl: `${THUMB_BASE}/ai-2.png`,
    qrUrl: `${QR_BASE}/ai-1.png`,
    videoUrl: `${VIDEO_BASE}/ai-1.mp4`,
  },
  {
    title: {
      ko: '〈이번 생은 제대로 키워드리겠습니다, 폐하!〉',
      en: "〈This Time, I'll Raise You Right, Your Majesty!〉",
      ja: '〈今度こそちゃんと育てます、陛下！〉',
    },
    tone: 'from-accent to-amber',
    posterUrl: `${THUMB_BASE}/ai-3.png`,
    qrUrl: `${QR_BASE}/ai-2.png`,
    videoUrl: `${VIDEO_BASE}/ai-2.mp4`,
  },
]

// CATEGORY 02 — 오디오웹툰
const AUDIO_WORKS_RAW: LocalizedWork[] = [
  {
    title: { ko: 'Bad Girl', en: 'Bad Girl', ja: 'Bad Girl' },
    platform: {
      ko: '극장용 예고편',
      en: 'Theatrical Trailer',
      ja: '劇場用トレーラー',
    },
    tone: 'from-ink to-accent-ink',
    posterUrl: `${AUDIO_THUMB_BASE}/badgirl.jpg`,
    qrUrl: `${QR_BASE}/audio-1.png`,
    videoUrl: `${AUDIO_VIDEO_BASE}/badgirl.mp4`,
  },
  {
    title: {
      ko: 'Dinos',
      en: 'Dinos',
      ja: 'Dinos',
    },
    platform: {
      ko: '브랜드 영상',
      en: 'Brand',
      ja: 'ブランド映像',
    },
    tone: 'from-accent to-amber',
    posterUrl: `${AUDIO_THUMB_BASE}/dinos.jpg`,
    qrUrl: `${QR_BASE}/audio-2.png`,
    videoUrl: `${AUDIO_VIDEO_BASE}/dinos.mp4`,
  },
  {
    title: {
      ko: 'Line',
      en: 'Line',
      ja: 'Line',
    },
    platform: {
      ko: '브랜드 영상',
      en: 'Brand',
      ja: 'ブランド映像',
    },
    tone: 'from-amber to-star',
    posterUrl: `${AUDIO_THUMB_BASE}/line.jpg`,
    qrUrl: `${QR_BASE}/audio-3.png`,
    videoUrl: `${AUDIO_VIDEO_BASE}/line.mp4`,
  },
  {
    title: { ko: 'Red Rex', en: 'Red Rex', ja: 'Red Rex' },
    platform: {
      ko: '숏폼 영상',
      en: 'Short-form',
      ja: 'ショートフォーム映像',
    },
    tone: 'from-accent-ink to-accent',
    posterUrl: `${AUDIO_THUMB_BASE}/redrex.jpg`,
    qrUrl: `${QR_BASE}/audio-4.png`,
    videoUrl: `${AUDIO_VIDEO_BASE}/redrex.mp4`,
  },
  {
    title: {
      ko: 'Totem',
      en: 'Totem',
      ja: 'Totem',
    },
    platform: { ko: 'TV 시리즈 파일럿 영상', en: 'TV Series Pilot', ja: 'TVシリーズパイロット' },
    tone: 'from-star to-amber',
    posterUrl: `${AUDIO_THUMB_BASE}/totem.jpg`,
    qrUrl: `${QR_BASE}/audio-5.png`,
    videoUrl: `${AUDIO_VIDEO_BASE}/totem.mp4`,
  },
]

// CATEGORY 03 — 모션툰
const MOTION_WORKS_RAW: LocalizedWork[] = [
  {
    title: {
      ko: '배트맨: 웨인 패밀리 어드벤쳐',
      en: 'Batman: Wayne Family Adventures',
      ja: 'バットマン：ウェイン・ファミリー・アドベンチャーズ',
    },
    tone: 'from-ink to-amber',
    posterUrl: `${THUMB_BASE}/motion-1.png`,
    qrUrl: `${QR_BASE}/motion-1.png`,
    videoUrl: `${VIDEO_BASE}/motion-1.mp4`,
  },
  {
    title: {
      ko: '타인은 지옥이다',
      en: 'Hell Is Other People',
      ja: '他人は地獄だ',
    },
    tone: 'from-ink to-accent-ink',
    posterUrl: `${THUMB_BASE}/motion-2.png`,
    qrUrl: `${QR_BASE}/motion-2.png`,
    videoUrl: `${VIDEO_BASE}/motion-2.mp4`,
  },
  {
    title: { ko: '더 복서', en: 'The Boxer', ja: 'ザ・ボクサー' },
    tone: 'from-accent-ink to-accent',
    posterUrl: `${THUMB_BASE}/motion-3.png`,
    qrUrl: `${QR_BASE}/motion-3.png`,
    videoUrl: `${VIDEO_BASE}/motion-3.mp4`,
  },
]

export function getAiSamples(locale: Locale): Work[] {
  return AI_SAMPLES_RAW.map((w) => localize(w, locale))
}

export function getAudioWorks(locale: Locale): Work[] {
  return AUDIO_WORKS_RAW.map((w) => localize(w, locale))
}

export function getMotionWorks(locale: Locale): Work[] {
  return MOTION_WORKS_RAW.map((w) => localize(w, locale))
}
