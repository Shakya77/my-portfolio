import { Head, useForm } from "@inertiajs/react"
import { format } from "date-fns"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Textarea } from "@/components/ui/textarea"


import AppLayout from "@/layouts/app-layout"
import { education } from "@/routes"
import type { BreadcrumbItem } from "@/types"


const breadcrumbs: BreadcrumbItem[] = [
    { title: "Education", href: education().url },
]

export default function Education() {
    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState<Date | undefined>()
    const [endDate, setEndDate] = useState<Date | undefined>()

    const { data, setData, post, processing, errors, reset } = useForm({
        institution: "",
        degree: "",
        field_of_study: "",
        start_year: "",
        end_year: "",
        description: "",
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(education.store(), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setStartDate(undefined)
                setEndDate(undefined)
                setOpen(false)
            }
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Education" />

            <div className="p-4">

            </div>
        </AppLayout>
    )
}