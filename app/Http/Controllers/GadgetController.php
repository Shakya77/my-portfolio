<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GadgetController extends Controller
{
    public function index()
    {
        return Inertia::render('website/gadget-index');
    }
}
