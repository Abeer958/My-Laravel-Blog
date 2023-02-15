<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        return Post::all();
    }

    public function store()
    {
        request()->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        return Post::create([
            'title' => request('title'),
            'content' => request('content'),
            'img' => request('img'),
        ]);
    }
    public function single()
    {
        return Post::first();
    }
}
