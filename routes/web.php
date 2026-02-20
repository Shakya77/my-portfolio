<?php

use App\Http\Controllers\Admin\EducationController;
use App\Http\Controllers\GadgetController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Website\ContactController;
use App\Http\Controllers\Website\ProjectController;
use App\Http\Controllers\Website\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('website/welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('website/about');
})->name('about');

Route::get('/service', [ServiceController::class, 'index'])->name('service.index');

Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');

Route::get('/project', [ProjectController::class, 'index'])->name('project.index');

Route::get('/my-gadgets', [GadgetController::class, 'index'])->name('my-gadgets.index');

Route::group(['middleware' => ['auth', 'verified']], function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('posts', PostController::class);
    Route::resource('education', EducationController::class);
});

require __DIR__ . '/settings.php';
