<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NotifyAdminMail extends Mailable 
{
    use Queueable, SerializesModels;

    public $userEmail;
    public $userQuery;

    /**
     * Create a new message instance.
     */
    public function __construct($userEmail, $userQuery)
    {
        $this->userEmail = $userEmail;
        $this->userQuery = $userQuery;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contacted to Bijan Shakya!',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.admin',
            with: [
                'userEmail' => $this->userEmail,
                'userQuery' => $this->userQuery,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
