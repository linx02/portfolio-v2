import Image from 'next/image'
import'./blob.css'
import isMobileDevice from '@/app/utils/isMobileDevice'

export default function Profile() {
    const isMobile = isMobileDevice()
    return (
        <div>
            <Image className='float' src="/images/profile.png" alt="Linus" width={!isMobile ? 500 : 250} height={!isMobile ? 500 : 250} />
        </div>
    )

}