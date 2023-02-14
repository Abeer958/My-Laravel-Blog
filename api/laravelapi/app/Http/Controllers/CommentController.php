<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index() {
        return Comment::all();
    }

    public function store() {
        request()->validate([
            'comment-id' => 'required',
            'content' => 'required'
        ]);

        return Comment::create([
            'comment-id' => request('comment-id'),
            'content' => request('content'),
        ]);
    }
}
