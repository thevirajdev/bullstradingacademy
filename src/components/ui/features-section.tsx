import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Play, Plus, Activity, Sparkles, Target } from 'lucide-react'

const MESCHAC_AVATAR = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
const BERNARD_AVATAR = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
const THEO_AVATAR = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
const GLODIE_AVATAR = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'

export default function FeaturesSection() {
    return (
        <section className="bg-transparent">
            <div className="py-12">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-gray-900 max-w-2xl text-balance text-4xl font-bold font-disket uppercase">Empowering traders with data-driven strategies</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            className="bg-white/45 backdrop-blur-md overflow-hidden p-6 border border-gray-200/60">
                            <Target className="text-blue-600 size-5" />
                            <h3 className="text-gray-900 mt-5 text-lg font-bold font-disket uppercase">Algorithmic Trading Systems</h3>
                            <p className="text-gray-600 mt-3 text-balance font-geist">Our advanced systems help you automate trades based on precise technical indicators.</p>

                            <MeetingIllustration />
                        </Card>

                        <Card
                            className="bg-white/45 backdrop-blur-md group overflow-hidden px-6 pt-6 border border-gray-200/60">
                            <CalendarCheck className="text-blue-600 size-5" />
                            <h3 className="text-gray-900 mt-5 text-lg font-bold font-disket uppercase">Portfolio Risk Management</h3>
                            <p className="text-gray-600 mt-3 text-balance font-geist">Our tools analyze your portfolio for risk exposure and optimization opportunities.</p>

                            <CodeReviewIllustration />
                        </Card>
                        <Card
                            className="bg-white/45 backdrop-blur-md group overflow-hidden px-6 pt-6 border border-gray-200/60 flex flex-col justify-between">
                            <div>
                                <Sparkles className="text-blue-600 size-5" />
                                <h3 className="text-gray-900 mt-5 text-lg font-bold font-disket uppercase">Live Trading Assistant</h3>
                                <p className="text-gray-600 mt-3 text-balance font-geist">A personalized trading companion that monitors market sentiment and alerts you.</p>
                            </div>
                            <div className="-mx-2 -mt-2 px-2 pt-2 relative overflow-hidden pb-8 mt-4">
                                <AIAssistantIllustration />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => {
    return (
        <Card
            className="mt-9 aspect-video p-4 bg-white/40 backdrop-blur-sm border-gray-200/50 shadow-none">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-green-700 bg-green-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-green-500/35">CHART</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-gray-100 to-gray-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold text-gray-900">Market Analysis Session</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-gray-500">2:30 - 3:45 PM</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { src: MESCHAC_AVATAR, alt: 'Trader 1' },
                        { src: BERNARD_AVATAR, alt: 'Trader 2' },
                        { src: THEO_AVATAR, alt: 'Trader 3' },
                        { src: GLODIE_AVATAR, alt: 'Trader 4' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-white size-7 rounded-full border border-gray-200 p-0.5 shadow-sm">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                                height="460"
                                width="460"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-gray-600 text-sm font-medium">Price Action Analysis</div>
        </Card>
    )
}

const CodeReviewIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3 bg-white/40 backdrop-blur-sm border-gray-200/50 shadow-none">
                <div className="mb-3 flex items-center gap-2">
                    <div className="bg-white size-6 rounded-full border border-gray-200 p-0.5 shadow-sm">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={MESCHAC_AVATAR}
                            alt="Aarav Mehta"
                            height="460"
                            width="460"
                        />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">Aarav Mehta</span>

                    <span className="text-gray-400 text-xs">2m</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-gray-200 h-2 rounded-full"></div>
                    <div className="bg-gray-200 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-gray-200 h-2 w-1/2 rounded-full"></div>
                </div>

                <Activity className="ml-8 mt-3 size-5 text-gray-500" />
            </Card>
            <Card className="aspect-[3/5] absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3 bg-white/40 backdrop-blur-sm border-gray-200/50 shadow-sm">
                <div className="bg-gray-100 m-auto flex size-10 rounded-full">
                    <Play className="fill-gray-400 stroke-gray-400 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AIAssistantIllustration = () => {
    return (
        <Card
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0 bg-white/40 backdrop-blur-sm border-gray-200/50 shadow-none">
            <div className="w-fit">
                <Sparkles className="size-3.5 fill-blue-300 stroke-blue-300" />
                <p className="mt-2 line-clamp-2 text-sm text-gray-800">How can I adjust my stop-loss strategy to minimize risk in volatile markets?</p>
            </div>
            <div className="bg-gray-100 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-gray-500 text-sm">Ask Trading Assistant</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent border-none shadow-none text-gray-500 hover:text-gray-900">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent border-none shadow-none text-gray-500 hover:text-gray-900">
                            <Globe />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-black text-white hover:bg-gray-800">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
