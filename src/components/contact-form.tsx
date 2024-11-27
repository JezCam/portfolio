import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function ContactForm() {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(subject)
        console.log(message)
    }

    return (
        <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full gap-2">
                    <Label className="px-3 text-xs text-600" htmlFor="input-01">
                        First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.currentTarget.value)
                        }}
                        className="h-8 md:h-fit text-xs md:text-base rounded-full"
                        id="input-01"
                        placeholder="Jeremy"
                        required
                        type="text"
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <Label className="px-3 text-xs text-600" htmlFor="input-02">
                        Last Name
                    </Label>
                    <Input
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.currentTarget.value)
                        }}
                        className="rounded-full h-8 md:h-fit text-xs md:text-base"
                        id="input-02"
                        placeholder="Cameron"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full flex flex-col gap-2 relative">
                    <Label className="px-3 text-xs text-600" htmlFor="input-03">
                        Email Address{' '}
                        <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value)
                        }}
                        required
                        defaultValue="example@email.com"
                        id="input-03"
                        className="h-8 md:h-fit text-xs md:text-base rounded-full peer invalid:border-destructive/80 invalid:text-destructive invalid:focus-visible:border-destructive/80 invalid:focus-visible:ring-destructive/20"
                        placeholder="jeremy@cameron.org.au"
                        type="email"
                    />
                    <p
                        className="px-3 absolute -bottom-5 hidden peer-invalid:block mt-2 text-xs text-destructive"
                        role="alert"
                        aria-live="polite"
                    >
                        Email is invalid
                    </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Label className="px-3 text-xs text-600" htmlFor="input-04">
                        Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.currentTarget.value)
                        }}
                        required
                        className="h-8 md:h-fit text-xs md:text-base rounded-full"
                        id="input-04"
                        placeholder="Subject"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Label className="px-3 text-xs text-600" htmlFor="textarea-01">
                    Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                    value={message}
                    onChange={(e) => {
                        setMessage(e.currentTarget.value)
                    }}
                    required
                    rows={4}
                    className="text-xs md:text-base rounded-[16px] md:rounded-[20px]"
                    id="textarea-01"
                    placeholder="How can I help you?"
                />
                <p
                    className="px-3 text-xs text-600"
                    role="region"
                    aria-live="polite"
                >
                    Please add as many details as you can
                </p>
            </div>
            <Button className="rounded-full text-xs md:text-base font-semibold mt-2 h-8 md:h-11">
                Submit
            </Button>
        </form>
    )
}
