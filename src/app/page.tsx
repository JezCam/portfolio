import { socials, tools } from '@/lib/definitions'
import Image from 'next/image'
import Me from '../../public/Me.png'
import ThemeToggle from '@/components/theme-toggle'
import { Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <div className="flex justify-center">
            <section className="flex w-full max-w-[720px] py-16">
                {/* Left */}
                <div className="flex flex-col gap-16">
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <Image
                            className="rounded-full w-11 h-11 border-2 border-foreground"
                            src={Me}
                            alt="Jeremy Cameron"
                            objectFit="cover"
                        />
                        <p className="text-xs">Me</p>
                    </div>
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <p className="text-xs">Socials</p>
                        {socials.map((social) => (
                            <a
                                target="_blank"
                                style={{
                                    borderColor: social.border,
                                    backgroundColor: social.background,
                                }}
                                href={social.url}
                                className="p-3 rounded-full w-11 h-11 border"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-16 w-full items-center pt-16">
                    {/* Intro */}
                    <div className="flex flex-col gap-6 items-center">
                        <h1 className="font-semibold text-foreground">
                            Jeremy Cameron.{' '}
                            <span className="text-500">Design Engineer.</span>
                        </h1>
                        <div className="flex flex-col gap-1.5 items-center text-500 text-sm">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="text-foreground" size={14} />
                                Melbourne,{' '}
                                <span className="text-foreground font-semibold">
                                    Australia
                                </span>
                            </div>
                            <a
                                className="flex items-center gap-1.5 underline"
                                href="mailto:jeremy@cameron.org.au"
                            >
                                <Mail className="text-foreground" size={14} />
                                jeremy@cameron.org.au
                            </a>
                        </div>
                    </div>
                    <Button className="rounded-full text-sm h-11 px-6">
                        Free consultation
                    </Button>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-16">
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <ThemeToggle />
                        <p className="text-xs">Theme</p>
                    </div>
                    {/* Me */}
                    <div className="flex flex-col gap-3 items-center">
                        <p className="text-xs">Tools</p>
                        {tools.map((tool) => (
                            <a
                                target="_blank"
                                style={{
                                    borderColor: tool.border,
                                    backgroundColor: tool.background,
                                }}
                                href={tool.url}
                                className="p-3 rounded-full w-11 h-11 border"
                            >
                                {tool.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
