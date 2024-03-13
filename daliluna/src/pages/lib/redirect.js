import { useEffect } from 'react'
  import { useRouter } from 'next/router'
  import languageDetector from './languageDetector'

  export const useRedirect = (to) => {
    const router = useRouter()
    to = to || router.asPath


    useEffect(() => {
      const detectedLng = languageDetector.detect()
      if (to.startsWith('/' + detectedLng) && router.route === '/404') { 
        router.replace('/' + detectedLng + router.route)
        return
      }

      languageDetector.cache(detectedLng)
      router.replace('/' + detectedLng + to)
    })

    return <></>
  };

  export const Redirect = () => {
    useRedirect()
    return <></>
  }

  export const getRedirect = (to) => () => {
    useRedirect(to)
    return <></>
  }

  const MyPage = () => {
    // Your page content here
    return <div>Hello, this is my page!</div>;
  };
  
  export default MyPage;
  