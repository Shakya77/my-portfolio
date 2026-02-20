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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // If you want a separate create page, you can use this
        // But since we're using modals, we might not need this
        return Inertia::render('Educations/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10) . '|gte:start_year',
            'description' => 'nullable|string',
        ]);

        Education::create($validated);

        return redirect()->route('education.index')
            ->with('success', 'Education record created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Education $education)
    {
        return Inertia::render('Educations/Show', [
            'education' => $education
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Education $education)
    {
        return Inertia::render('Educations/Edit', [
            'education' => $education
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
            'end_year' => 'nullable|integer|min:1900|max:' . (date('Y') + 10) . '|gte:start_year',
            'description' => 'nullable|string',
        ]);

        $education->update($validated);

        return redirect()->route('education.index')
            ->with('success', 'Education record updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Education $education)
    {
        $education->delete();

        return redirect()->route('education.index')
            ->with('success', 'Education record deleted successfully.');
    }
}
