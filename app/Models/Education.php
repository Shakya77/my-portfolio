<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $fillable = [
        'college',
        'institution',
        'degree',
        'abbreviation',
        'field_of_study',
        'start_year',
        'end_year',
        'currently_studying',
        'description',
    ];

    protected $casts = [
        'start_year' => 'integer',
        'end_year' => 'integer',
        'currently_studying' => 'boolean',
    ];

    /**
     * Get the duration of the education.
     */
    public function getDurationAttribute(): string
    {
        if ($this->end_year) {
            return $this->start_year . ' - ' . $this->end_year;
        }
        return $this->start_year . ' - Present';
    }

    /**
     * Get the full education title.
     */
    public function getFullTitleAttribute(): string
    {
        return $this->degree . ' in ' . $this->field_of_study;
    }
}
