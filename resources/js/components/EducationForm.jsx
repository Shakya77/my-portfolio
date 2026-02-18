import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/Components/ui/dialog';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';

export default function EducationForm({ open, onOpenChange, education = null }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: education?.name || '',
        institution: education?.institution || '',
        degree: education?.degree || '',
        field_of_study: education?.field_of_study || '',
        start_year: education?.start_year || new Date().getFullYear(),
        end_year: education?.end_year || '',
        description: education?.description || '',
    });

    // Reset form when dialog opens/closes or education changes
    useEffect(() => {
        if (open) {
            setData({
                name: education?.name || '',
                institution: education?.institution || '',
                degree: education?.degree || '',
                field_of_study: education?.field_of_study || '',
                start_year: education?.start_year || new Date().getFullYear(),
                end_year: education?.end_year || '',
                description: education?.description || '',
            });
        }
    }, [open, education]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (education) {
            put(route('education.update', education.id), {
                onSuccess: () => {
                    onOpenChange(false);
                    reset();
                },
            });
        } else {
            post(route('education.store'), {
                onSuccess: () => {
                    onOpenChange(false);
                    reset();
                },
            });
        }
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - 50 + i);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        {education ? 'Edit Education' : 'Add New Education'}
                    </DialogTitle>
                    <DialogDescription>
                        {education
                            ? 'Update your education details below.'
                            : 'Add your education details below.'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name/Title</Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="e.g., Bachelor of Science"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="institution">Institution</Label>
                            <Input
                                id="institution"
                                value={data.institution}
                                onChange={e => setData('institution', e.target.value)}
                                placeholder="e.g., University of Example"
                            />
                            {errors.institution && (
                                <p className="text-sm text-red-500">{errors.institution}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="degree">Degree</Label>
                            <Input
                                id="degree"
                                value={data.degree}
                                onChange={e => setData('degree', e.target.value)}
                                placeholder="e.g., Bachelor's, Master's"
                            />
                            {errors.degree && (
                                <p className="text-sm text-red-500">{errors.degree}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="field_of_study">Field of Study</Label>
                            <Input
                                id="field_of_study"
                                value={data.field_of_study}
                                onChange={e => setData('field_of_study', e.target.value)}
                                placeholder="e.g., Computer Science"
                            />
                            {errors.field_of_study && (
                                <p className="text-sm text-red-500">{errors.field_of_study}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="start_year">Start Year</Label>
                            <select
                                id="start_year"
                                value={data.start_year}
                                onChange={e => setData('start_year', parseInt(e.target.value))}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            {errors.start_year && (
                                <p className="text-sm text-red-500">{errors.start_year}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="end_year">End Year (Optional)</Label>
                            <select
                                id="end_year"
                                value={data.end_year}
                                onChange={e => setData('end_year', e.target.value ? parseInt(e.target.value) : '')}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Present</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            {errors.end_year && (
                                <p className="text-sm text-red-500">{errors.end_year}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Textarea
                            id="description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            placeholder="Add any additional details about your education..."
                            rows={4}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description}</p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {education ? 'Update' : 'Create'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}