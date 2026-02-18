<?php

use App\Http\Controllers\Admin\EducationController;
use App\Http\Controllers\GadgetController;
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

    Route::get('/education', [EducationController::class, 'index'])->name('education.index');
    Route::post('/education', [EducationController::class, 'store'])->name('education.store');
    Route::put('/education/{education}', [EducationController::class, 'update'])->name('education.update');
    Route::delete('/education/{education}', [EducationController::class, 'destroy'])->name('education.destroy');
});

require __DIR__ . '/settings.php';
