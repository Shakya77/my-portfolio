<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('education')->insert([
            [
                'college' => 'Shikshadeep Higher Secondary School',
                'institution' => 'NEB',
                'degree' => '+2',
                'abbreviation' => null,
                'field_of_study' => 'Science',
                'start_year' => 2019,
                'end_year' => 2020,
                'currently_studying' => false,
                'description' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'college' => 'Himalaya Darshan College',
                'institution' => 'Tribhuvan University',
                'degree' => 'Bachelor of Science in Computer Science and Information Technology',
                'abbreviation' => 'BSc CSIT',
                'field_of_study' => 'Computer Science and Information Technology',
                'start_year' => 2022,
                'end_year' => null,  // ongoing
                'currently_studying' => true,
                'description' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
