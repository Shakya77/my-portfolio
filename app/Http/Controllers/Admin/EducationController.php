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
        $educations = Education::orderBy('start_year', 'desc')->get();

        return Inertia::render('app/education/index', [
            'educations' => $educations
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'college' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'abbreviation' => 'nullable|string|max:50',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10) . '|gte:start_year',
            'currently_studying' => 'boolean',
            'description' => 'nullable|string',
        ]);

        // If currently studying, ensure end_year is null
        if ($validated['currently_studying'] ?? false) {
            $validated['end_year'] = null;
        }

        Education::create($validated);

        return redirect()->route('education.index')
            ->with('success', 'Education record created successfully.');
    }

    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'college' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'abbreviation' => 'nullable|string|max:50',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10) . '|gte:start_year',
            'currently_studying' => 'boolean',
            'description' => 'nullable|string',
        ]);

        // If currently studying, ensure end_year is null
        if ($validated['currently_studying'] ?? false) {
            $validated['end_year'] = null;
        }

        $education->update($validated);

        return redirect()->route('education.index')
            ->with('success', 'Education record updated successfully.');
    }

    public function destroy(Education $education)
    {
        $education->delete();

        return redirect()->route('education.index')
            ->with('success', 'Education record deleted successfully.');
    }
}
