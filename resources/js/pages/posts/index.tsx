import { usePage, useForm } from '@inertiajs/react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
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

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

interface Props {
    posts: Post[];
}

export default function Index({ posts }: Props) {
    const { flash } = usePage().props;
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deletingPost, setDeletingPost] = useState<Post | null>(null);

    // Create form
    const { data: createData, setData: setCreateData, post, processing: createProcessing, errors: createErrors, reset: resetCreate } = useForm({
        title: '',
        content: '',
    });

    // Edit form
    const { data: editData, setData: setEditData, put, processing: editProcessing, errors: editErrors, reset: resetEdit } = useForm({
        title: '',
        content: '',
    });

    // Delete form
    const { delete: destroy, processing: deleteProcessing } = useForm({});

    // Handle create submit
    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('posts.store'), {
            onSuccess: () => {
                setShowCreateModal(false);
                resetCreate();
            },
        });
    };

    // Handle edit submit
    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPost) return;

        put(route('posts.update', editingPost.id), {
            onSuccess: () => {
                setShowEditModal(false);
                setEditingPost(null);
                resetEdit();
            },
        });
    };

    // Handle delete
    const handleDelete = (post: Post) => {
        setDeletingPost(post);
        setShowDeleteDialog(true);
    };

    const confirmDelete = () => {
        if (!deletingPost) return;

        destroy(route('posts.destroy', deletingPost.id), {
            onSuccess: () => {
                setShowDeleteDialog(false);
                setDeletingPost(null);
            },
        });
    };

    // Open edit modal with post data
    const openEditModal = (post: Post) => {
        setEditingPost(post);
        setEditData({
            title: post.title,
            content: post.content,
        });
        setShowEditModal(true);
    };

    // Auto-hide flash messages
    useEffect(() => {
        if (flash?.success) {
            const timer = setTimeout(() => {
                // Clear flash message logic here if needed
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <AppLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {flash?.success && (
                        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                            {flash.success}
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Posts</h2>
                                <Button onClick={() => setShowCreateModal(true)}>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create New Post
                                </Button>
                            </div>

                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Content</TableHead>
                                            <TableHead>Created At</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {posts.map((post) => (
                                            <TableRow key={post.id}>
                                                <TableCell>{post.id}</TableCell>
                                                <TableCell className="font-medium">{post.title}</TableCell>
                                                <TableCell>{post.content.substring(0, 50)}...</TableCell>
                                                <TableCell>{new Date(post.created_at).toLocaleDateString()}</TableCell>
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => openEditModal(post)}
                                                        className="mr-2"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDelete(post)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Post</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to create a new post.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="create-title">Title</Label>
                                <Input
                                    id="create-title"
                                    value={createData.title}
                                    onChange={e => setCreateData('title', e.target.value)}
                                    placeholder="Enter post title"
                                />
                                {createErrors.title && (
                                    <p className="text-sm text-red-500">{createErrors.title}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="create-content">Content</Label>
                                <Textarea
                                    id="create-content"
                                    value={createData.content}
                                    onChange={e => setCreateData('content', e.target.value)}
                                    placeholder="Enter post content"
                                    rows={5}
                                />
                                {createErrors.content && (
                                    <p className="text-sm text-red-500">{createErrors.content}</p>
                                )}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowCreateModal(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createProcessing}>
                                {createProcessing ? 'Creating...' : 'Create Post'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Edit Modal */}
            <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Post</DialogTitle>
                        <DialogDescription>
                            Update the post details below.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="edit-title">Title</Label>
                                <Input
                                    id="edit-title"
                                    value={editData.title}
                                    onChange={e => setEditData('title', e.target.value)}
                                    placeholder="Enter post title"
                                />
                                {editErrors.title && (
                                    <p className="text-sm text-red-500">{editErrors.title}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="edit-content">Content</Label>
                                <Textarea
                                    id="edit-content"
                                    value={editData.content}
                                    onChange={e => setEditData('content', e.target.value)}
                                    placeholder="Enter post content"
                                    rows={5}
                                />
                                {editErrors.content && (
                                    <p className="text-sm text-red-500">{editErrors.content}</p>
                                )}
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setShowEditModal(false);
                                    setEditingPost(null);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editProcessing}>
                                {editProcessing ? 'Updating...' : 'Update Post'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete Post</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this post? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-sm text-gray-500">
                            Post: <span className="font-medium text-gray-900">{deletingPost?.title}</span>
                        </p>
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setShowDeleteDialog(false);
                                setDeletingPost(null);
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