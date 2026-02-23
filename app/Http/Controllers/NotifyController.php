<?php

namespace App\Http\Controllers;

use App\Mail\NotifyAdminMail;
use App\Mail\NotifyUserMail;
use App\Models\NotifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NotifyController extends Controller
{
    public function notify(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'query' => 'nullable',
        ]);

        $email = $request->email;
        $query = $request->input('query');

        $notifyEmail = new NotifyEmail();
        $notifyEmail->email = $request->email;
        $notifyEmail->first_name = $request->input('first_name');
        $notifyEmail->last_name = $request->input('last_name');
        $notifyEmail->query = $request->input('query');
        $notifyEmail->save();

        Mail::to($email)->send(new NotifyUserMail($email));

        Mail::to(config('mail.from.address'))->send(new NotifyAdminMail($email, $query));

        return redirect()->back()->with('success', 'Your message has been sent successfully! We will get back to you soon.');
    }
}
