import './Intro.css'
import { useNav } from '../../hooks/useNav'
import me from '../../assets/bwMe.png'
import { useState } from 'react'
import gmailIcon from '../../assets/icons/gmail.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import githubIcon from '../../assets/icons/github.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import arr from '../../assets/arr.svg'

const Intro = () => {
  const homeRef = useNav('Intro')
  const [isLeaving, setIsLeaving] = useState(false)
  const handelClickDown = () => {
    setIsLeaving(true)
    document
      .getElementById('skillsSection')
      .scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      setIsLeaving(false)
    }, 1000)
  }
  return (
    <section className='container'>
      <div className='intro' id='introSection' ref={homeRef}>
        <img
          src={me}
          alt=''
          className={isLeaving ? 'leaving-me-img' : 'me-img'}
        />
        <div onClick={handelClickDown}>
          <img src={arr} alt='' className='arr' />
        </div>
        <div className={isLeaving ? 'leaving-div' : 'me-div'}>
          <p className='me-p'>
            <span id='me-title'>About Me...</span>
            Hello there!{' '}
            <span className='wave'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 224 224'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M102.684 1.81637C100.349 2.88947 97.5398 4.77963 96.4414 6.01529C94.4907 8.21143 94.3803 8.21781 91.6655 6.32766C87.8193 3.64915 82.4013 1.9428 77.7432 1.9428C66.2948 1.9428 55.4695 10.8474 55.4599 20.2706C55.4557 24.0658 55.2901 24.2549 51.9661 24.2549C46.6468 24.2549 39.449 28.4379 35.8532 33.6185C33.1628 37.4934 32.6109 39.4207 32.2734 46.1026C31.9073 53.3658 31.6897 54.0043 29.5841 54.0043C25.7676 54.0043 19.751 58.9236 17.2559 64.083C15.631 67.4436 14.9136 70.8967 14.9136 75.3612C14.9136 81.4917 15.6437 83.2884 30.3907 113.429C38.9034 130.827 48.7747 152.425 52.3269 161.423C59.9885 180.829 64.2115 188.903 72.1809 199.387C82.0065 212.313 92.038 219.453 104.508 222.396C140.224 230.826 188.43 204.967 202.635 169.758C207.162 158.541 208.285 151.987 208.285 136.794C208.285 118.301 210.029 108.479 217.371 85.6439C224.594 63.1788 225.6 55.2219 221.91 49.7544C218.735 45.0508 212.394 41.908 206.075 41.908C190.864 41.908 181.162 52.8143 172.184 80L168.688 90.5897L166.489 85.8436C154.168 59.2455 129.056 9.29091 126.79 6.87271C120.521 0.182276 110.713 -1.87468 102.684 1.81637ZM103.215 10.7327C100.588 12.1277 98.3008 13.9796 98.1331 14.8487C97.9654 15.7168 106.681 35.2239 117.502 58.1968C128.323 81.1708 137.177 100.139 137.177 100.35C137.177 100.561 134.717 99.2181 131.711 97.3673C126.491 94.1522 125.924 93.3246 119.133 79.0491C104.272 47.8005 89.1725 18.3146 86.7835 15.874C84.1068 13.1392 76.0515 11.6953 70.8118 13.0117C66.6228 14.0646 62.8848 18.6492 62.8848 22.7345C62.8848 25.0496 69.6571 40.5353 83.1134 68.9863C94.2392 92.5096 103.846 112.699 104.462 113.851C105.405 115.615 104.686 115.433 99.8875 112.688L94.1935 109.433L75.6376 70.0308C58.4592 33.5548 56.8831 30.6298 54.4113 30.634C47.5775 30.6436 41.6586 38.0629 41.6586 46.6179C41.6586 51.4214 45.629 61.039 65.8714 105.269C71.6884 117.978 76.1374 128.378 75.7564 128.378C75.3765 128.378 72.7508 126.823 69.9203 124.925C64.8557 121.526 64.549 120.986 50.2987 90.4155C39.8395 67.9802 35.3289 59.3539 34.0458 59.338C31.4063 59.3061 25.6551 64.5696 24.0026 68.5295C20.858 76.0635 21.6741 78.6124 37.4303 110.463C45.612 127.003 55.2084 147.959 58.7553 157.034C66.7565 177.503 71.9591 187.624 78.7239 195.878C89.3518 208.847 97.473 213.012 114.16 214.048C140.583 215.687 167.652 201.067 184.807 175.889C193.245 163.506 195.483 154.872 196.576 130.503C197.575 108.245 198.847 102.654 208.323 78.8759C211.302 71.4013 214.008 63.0131 214.336 60.2357C214.881 55.6373 214.644 54.8947 211.691 51.9388C206.314 46.5553 197.454 47.9259 190.574 55.206C184.713 61.4077 177.968 77.4925 175.929 90.1286C174.53 98.7995 171.587 102.486 161.082 108.725C155.814 111.854 149.05 116.591 146.048 119.252C131.807 131.88 125.528 150.556 130.266 166.193C132.369 173.131 132.226 173.355 129.311 167.69C120.174 149.926 124.332 129.121 140.121 113.593C144.327 109.458 150.203 105.049 154.42 102.866C158.357 100.828 161.58 98.8112 161.583 98.3862C161.592 96.6097 124.978 19.1826 122.624 15.9983C117.195 8.65661 110.527 6.84827 103.215 10.7327ZM170.725 18.8044C175.082 30.4194 176.882 41.4734 176.016 51.3014L175.357 58.7855L178.398 55.2952C187.295 45.0805 185.299 25.5798 174.221 14.4896C171.414 11.6794 168.683 9.38016 168.153 9.38016C167.623 9.38016 168.779 13.6205 170.725 18.8044ZM140.349 17.4858C156.378 32.6219 165.752 52.5551 165.869 71.7445C165.905 77.5956 165.983 77.7752 167.395 75.2539C170.114 70.3994 171.403 59.2243 170.105 51.754C167.593 37.3032 156.361 21.5742 143.843 14.9784C132.834 9.17829 132.106 9.70103 140.349 17.4858ZM13.2165 112.646C9.15488 128.535 14.4519 145.98 27.2025 158.708C33.3942 164.889 46.3751 172.678 48.9976 171.785C49.6078 171.578 47.3642 169.141 44.0115 166.37C28.8815 153.865 19.3965 136.784 15.8326 115.628L14.4912 107.66L13.2165 112.646ZM0.793861 161.315C2.72651 170.364 11.6182 180.636 21.2634 184.958C27.3532 187.689 42.6233 188.753 47.4958 186.787C50.6108 185.531 50.4781 185.451 41.3402 183.108C25.3335 179.005 15.3115 173.506 5.76611 163.587L0 157.596L0.793861 161.315Z'
                  fill='black'
                />
              </svg>
            </span>{' '}
            Welcome to my personal website. This website is fully designed and
            developed by me. I currently work at Mayo Clinic as a data analyst
            and software developer. When I am not coding or problem solving, I
            enjoy graphic design, jigsaw puzzles, reading novels and biking.
            Please feel free to contact me or learn more on my work using the
            links below.
          </p>
          <p className='icons'>
            <a
              href='mailto:ghazalalabtah@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={gmailIcon} alt='' className='socialIcons' />
            </a>
            <a
              href='https://www.facebook.com/ghazal.al.568847'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebookIcon} alt='' className='socialIcons' />
            </a>
            <a
              href='https://www.github.com/alabgh01'
              target='_blank'
              rel='noreferrer'
            >
              <img src={githubIcon} alt='' className='socialIcons' />
            </a>
            <a
              href='https://www.instagram.com/ghazal_alabtah'
              target='_blank'
              rel='noreferrer'
            >
              <img src={instagramIcon} alt='' className='socialIcons' />
            </a>
            <a
              href='https://www.linkedin.com/in/ghazal-alabtah-00'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedinIcon} alt='' className='socialIcons' />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
