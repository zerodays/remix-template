import useTranslation from '~/i18n/i18n';

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img src="/logo-light.png" alt="Remix Logo" className="h-12 w-auto" />

      <h1 className="text-3xl font-bold text-white">{t('common.welcome')}</h1>

      <p className="text-base text-gray-400">{t('common.subtitle')}</p>
    </div>
  );
}
