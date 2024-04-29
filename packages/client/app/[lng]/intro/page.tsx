import { useTranslation } from '../../i18n';

export default async function Page({ params: { lng }} : any) {
    const { t } = await useTranslation(lng, 'intro');
    return(
        <>
            <h1>{t('title')}</h1>
        </>
    )
}