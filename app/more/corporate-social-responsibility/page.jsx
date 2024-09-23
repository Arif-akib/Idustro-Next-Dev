'use client'

import Hero from '/app/components/Shared/Hero'
import CSRSlider from '/app/components/CSR/ImageSlider'
import CSRStory from '/app/components/CSR/Story'

export default function CSR() {
    const HeroLable = 'Corporate Social Responsibility'
    const bread = 'Home >> More >> Corporate Social Responsibility'
    return (
        <>
            <Hero HeroLable={HeroLable} bread={ bread} />
            <CSRSlider />
            <CSRStory/>
        </>
    )
}