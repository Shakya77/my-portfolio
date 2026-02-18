<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
    public function index()
    {
        $education = Education::orderBy('start_year', 'desc')->get();

        return Inertia::render('Education/Index', [
            'education' => $education
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|digits:4|integer',
            'end_year' => 'nullable|digits:4|integer',
            'description' => 'nullable|string',
        ]);

        Education::create($validated);

        return redirect()->back()->with('success', 'Education added!');
    }

    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|digits:4|integer',
            'end_year' => 'nullable|digits:4|integer',
            'description' => 'nullable|string',
        ]);

        $education->update($validated);

        return redirect()->back()->with('success', 'Education updated!');
    }

    public function destroy(Education $education)
    {
        $education->delete();
        return redirect()->back()->with('success', 'Education deleted!');
    }
}
