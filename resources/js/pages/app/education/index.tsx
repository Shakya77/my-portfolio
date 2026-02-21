import { usePage, useForm } from '@inertiajs/react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';

interface Education {
    id: number;
    college: string;
    institution: string;
    degree: string;
    abbreviation: string | null;
    field_of_study: string;
    start_year: number;
    end_year: number | null;
    currently_studying: boolean;
    description: string | null;
    created_at: string;
}

interface Props {
    educations: Education[];
}

export default function Index({ educations }: Props) {
    const { flash } = usePage().props;
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingEducation, setEditingEducation] = useState<Education | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deletingEducation, setDeletingEducation] = useState<Education | null>(null);
    const [createCurrentlyStudying, setCreateCurrentlyStudying] = useState(false);
    const [editCurrentlyStudying, setEditCurrentlyStudying] = useState(false);

    // Create form
    const { data: createData, setData: setCreateData, post, processing: createProcessing, errors: createErrors, reset: resetCreate } = useForm({
        college: '',
        institution: '',
        degree: '',
        abbreviation: '',
        field_of_study: '',
        start_year: new Date().getFullYear(),
        end_year: '',
        currently_studying: false,
        description: '',
    });

    // Edit form
    const { data: editData, setData: setEditData, put, processing: editProcessing, errors: editErrors, reset: resetEdit } = useForm({
        college: '',
        institution: '',
        degree: '',
        abbreviation: '',
        field_of_study: '',
        start_year: new Date().getFullYear(),
        end_year: '',
        currently_studying: false,
        description: '',
    });

    // Delete form
    const { delete: destroy, processing: deleteProcessing } = useForm({});

    // Handle create submit
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare data for submission
        const submitData = {
            ...createData,
            end_year: createData.currently_studying ? null : createData.end_year,
        };

        const loadingToast = toast.loading('Creating education record...');

        post(route('education.store'), {
            data: submitData,
            onSuccess: () => {
                toast.dismiss(loadingToast);
                setShowCreateModal(false);
                resetCreate();
                setCreateCurrentlyStudying(false);
            },
            onError: (errors) => {
                toast.dismiss(loadingToast);
            },
        });
    };

    // Handle edit submit
    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingEducation) return;

        // Prepare data for submission
        const submitData = {
            ...editData,
            end_year: editData.currently_studying ? null : editData.end_year,
        };

        const loadingToast = toast.loading('Updating education record...');

        put(route('education.update', editingEducation.id), {
            data: submitData,
            onSuccess: () => {
                toast.dismiss(loadingToast);
                setShowEditModal(false);
                setEditingEducation(null);
                resetEdit();
                setEditCurrentlyStudying(false);
            },
            onError: (errors) => {
                toast.dismiss(loadingToast);
            },
        });
    };

    // Handle delete
    const handleDelete = (education: Education) => {
        setDeletingEducation(education);
        setShowDeleteDialog(true);
    };

    const confirmDelete = () => {
        if (!deletingEducation) return;

        const loadingToast = toast.loading('Deleting education record...');

        destroy(route('education.destroy', deletingEducation.id), {
            onSuccess: () => {
                toast.dismiss(loadingToast);
                setShowDeleteDialog(false);
                setDeletingEducation(null);
            },
            onError: () => {
                toast.dismiss(loadingToast);
            },
        });
    };

    // Open edit modal with education data
    const openEditModal = (education: Education) => {
        setEditingEducation(education);
        setEditData({
            college: education.college,
            institution: education.institution,
            degree: education.degree,
            abbreviation: education.abbreviation || '',
            field_of_study: education.field_of_study,
            start_year: education.start_year,
            end_year: education.end_year?.toString() || '',
            currently_studying: education.currently_studying,
            description: education.description || '',
        });
        setEditCurrentlyStudying(education.currently_studying);
        setShowEditModal(true);
    };

    // Handle currently studying checkbox change for create
    const handleCreateCurrentlyStudyingChange = (checked: boolean) => {
        setCreateCurrentlyStudying(checked);
        setCreateData('currently_studying', checked);
        if (checked) {
            setCreateData('end_year', '');
        }
    };

    // Handle currently studying checkbox change for edit
    const handleEditCurrentlyStudyingChange = (checked: boolean) => {
        setEditCurrentlyStudying(checked);
        setEditData('currently_studying', checked);
        if (checked) {
            setEditData('end_year', '');
        }
    };

    // Generate years for dropdown
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    // Show flash message as toast when component mounts
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }

        if (flash?.error) {
            toast.error(flash.error);
        }

        if (flash?.warning) {
            toast.warning(flash.warning);
        }

        if (flash?.info) {
            toast.info(flash.info);
        }
    }, [flash]);

    return (
        <AppLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <Button onClick={() => setShowCreateModal(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                    </Button>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>College</TableHead>
                                <TableHead>Institution</TableHead>
                                <TableHead>Degree</TableHead>
                                <TableHead>Abbreviation</TableHead>
                                <TableHead>Field of Study</TableHead>
                                <TableHead>Start Year</TableHead>
                                <TableHead>End Year</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {educations.map((education) => (
                                <TableRow key={education.id}>
                                    <TableCell>{education.id}</TableCell>
                                    <TableCell className="font-medium">{education.college}</TableCell>
                                    <TableCell>{education.institution}</TableCell>
                                    <TableCell>{education.degree}</TableCell>
                                    <TableCell>{education.abbreviation || '-'}</TableCell>
                                    <TableCell>{education.field_of_study}</TableCell>
                                    <TableCell>{education.start_year}</TableCell>
                                    <TableCell>
                                        {education.currently_studying ? 'Present' : education.end_year || '-'}
                                    </TableCell>
                                    <TableCell>
                                        {education.currently_studying ? (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Currently Studying
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Completed
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => openEditModal(education)}
                                            className="mr-2"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDelete(education)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {educations.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                                        No education records found. Click "Add Education" to create one.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Create Modal */}
            <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add Education</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to add your education.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-college">College *</Label>
                                    <Input
                                        id="create-college"
                                        value={createData.college}
                                        onChange={e => setCreateData('college', e.target.value)}
                                        placeholder="e.g., St. Xavier's College, Kathmandu"
                                    />
                                    {createErrors.college && (
                                        <p className="text-sm text-red-500">{createErrors.college}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-institution">Institution *</Label>
                                    <Input
                                        id="create-institution"
                                        value={createData.institution}
                                        onChange={e => setCreateData('institution', e.target.value)}
                                        placeholder="e.g., Tribhuvan University"
                                    />
                                    {createErrors.institution && (
                                        <p className="text-sm text-red-500">{createErrors.institution}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-degree">Degree *</Label>
                                    <Input
                                        id="create-degree"
                                        value={createData.degree}
                                        onChange={e => setCreateData('degree', e.target.value)}
                                        placeholder="e.g., Bachelor of Science in Computer Science and IT"
                                    />
                                    {createErrors.degree && (
                                        <p className="text-sm text-red-500">{createErrors.degree}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="create-abbreviation">Abbreviation</Label>
                                    <Input
                                        id="create-abbreviation"
                                        value={createData.abbreviation}
                                        onChange={e => setCreateData('abbreviation', e.target.value)}
                                        placeholder="e.g., BSc CSIT"
                                    />
                                    {createErrors.abbreviation && (
                                        <p className="text-sm text-red-500">{createErrors.abbreviation}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="create-field">Field of Study *</Label>
                                <Input
                                    id="create-field"
                                    value={createData.field_of_study}
                                    onChange={e => setCreateData('field_of_study', e.target.value)}
                                    placeholder="e.g., Computer Science and Information Technology"
                                />
                                {createErrors.field_of_study && (
                                    <p className="text-sm text-red-500">{createErrors.field_of_study}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="create-start-year">Start Year *</Label>
                                    <select
                                        id="create-start-year"
                                        value={createData.start_year}
                                        onChange={e => setCreateData('start_year', parseInt(e.target.value))}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    {createErrors.start_year && (
                                        <p className="text-sm text-red-500">{createErrors.start_year}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Checkbox
                                            id="create-currently-studying"
                                            checked={createCurrentlyStudying}
                                            onCheckedChange={handleCreateCurrentlyStudyingChange}
                                        />
                                        <Label htmlFor="create-currently-studying">Currently Studying</Label>
                                    </div>
                                    {!createCurrentlyStudying && (
                                        <>
                                            <Label htmlFor="create-end-year">End Year</Label>
                                            <select
                                                id="create-end-year"
                                                value={createData.end_year}
                                                onChange={e => setCreateData('end_year', e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">Select Year</option>
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                            {createErrors.end_year && (
                                                <p className="text-sm text-red-500">{createErrors.end_year}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="create-description">Description</Label>
                                <Textarea
                                    id="create-description"
                                    value={createData.description}
                                    onChange={e => setCreateData('description', e.target.value)}
                                    placeholder="Describe your studies, achievements, etc."
                                    rows={4}
                                />
                                {createErrors.description && (
                                    <p className="text-sm text-red-500">{createErrors.description}</p>
                                )}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setShowCreateModal(false);
                                    resetCreate();
                                    setCreateCurrentlyStudying(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createProcessing}>
                                {createProcessing ? 'Saving...' : 'Save Education'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Edit Modal */}
            <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit Education</DialogTitle>
                        <DialogDescription>
                            Update the education details below.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-college">College *</Label>
                                    <Input
                                        id="edit-college"
                                        value={editData.college}
                                        onChange={e => setEditData('college', e.target.value)}
                                        placeholder="e.g., St. Xavier's College, Kathmandu"
                                    />
                                    {editErrors.college && (
                                        <p className="text-sm text-red-500">{editErrors.college}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-institution">Institution *</Label>
                                    <Input
                                        id="edit-institution"
                                        value={editData.institution}
                                        onChange={e => setEditData('institution', e.target.value)}
                                        placeholder="e.g., Tribhuvan University"
                                    />
                                    {editErrors.institution && (
                                        <p className="text-sm text-red-500">{editErrors.institution}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-degree">Degree *</Label>
                                    <Input
                                        id="edit-degree"
                                        value={editData.degree}
                                        onChange={e => setEditData('degree', e.target.value)}
                                        placeholder="e.g., Bachelor of Science in Computer Science and IT"
                                    />
                                    {editErrors.degree && (
                                        <p className="text-sm text-red-500">{editErrors.degree}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-abbreviation">Abbreviation</Label>
                                    <Input
                                        id="edit-abbreviation"
                                        value={editData.abbreviation}
                                        onChange={e => setEditData('abbreviation', e.target.value)}
                                        placeholder="e.g., BSc CSIT"
                                    />
                                    {editErrors.abbreviation && (
                                        <p className="text-sm text-red-500">{editErrors.abbreviation}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="edit-field">Field of Study *</Label>
                                <Input
                                    id="edit-field"
                                    value={editData.field_of_study}
                                    onChange={e => setEditData('field_of_study', e.target.value)}
                                    placeholder="e.g., Computer Science and Information Technology"
                                />
                                {editErrors.field_of_study && (
                                    <p className="text-sm text-red-500">{editErrors.field_of_study}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-start-year">Start Year *</Label>
                                    <select
                                        id="edit-start-year"
                                        value={editData.start_year}
                                        onChange={e => setEditData('start_year', parseInt(e.target.value))}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    {editErrors.start_year && (
                                        <p className="text-sm text-red-500">{editErrors.start_year}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Checkbox
                                            id="edit-currently-studying"
                                            checked={editCurrentlyStudying}
                                            onCheckedChange={handleEditCurrentlyStudyingChange}
                                        />
                                        <Label htmlFor="edit-currently-studying">Currently Studying</Label>
                                    </div>
                                    {!editCurrentlyStudying && (
                                        <>
                                            <Label htmlFor="edit-end-year">End Year</Label>
                                            <select
                                                id="edit-end-year"
                                                value={editData.end_year}
                                                onChange={e => setEditData('end_year', e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">Select Year</option>
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                            {editErrors.end_year && (
                                                <p className="text-sm text-red-500">{editErrors.end_year}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="edit-description">Description</Label>
                                <Textarea
                                    id="edit-description"
                                    value={editData.description}
                                    onChange={e => setEditData('description', e.target.value)}
                                    placeholder="Describe your studies, achievements, etc."
                                    rows={4}
                                />
                                {editErrors.description && (
                                    <p className="text-sm text-red-500">{editErrors.description}</p>
                                )}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setShowEditModal(false);
                                    setEditingEducation(null);
                                    resetEdit();
                                    setEditCurrentlyStudying(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editProcessing}>
                                {editProcessing ? 'Updating...' : 'Update Education'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete Education</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this education record? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-sm text-gray-500">
                            Degree: <span className="font-medium text-gray-900">
                                {deletingEducation?.degree} {deletingEducation?.abbreviation ? `(${deletingEducation.abbreviation})` : ''}
                            </span>
                            <br />
                            College: <span className="font-medium text-gray-900">
                                {deletingEducation?.college}
                            </span>
                            <br />
                            Institution: <span className="font-medium text-gray-900">
                                {deletingEducation?.institution}
                            </span>
                        </p>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setShowDeleteDialog(false);
                                setDeletingEducation(null);
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={confirmDelete}
                            disabled={deleteProcessing}
                        >
                            {deleteProcessing ? 'Deleting...' : 'Delete'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}