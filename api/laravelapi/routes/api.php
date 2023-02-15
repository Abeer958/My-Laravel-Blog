<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Post;
use App\Models\Comment;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', [PostController::class, 'index']);
// Route::get('/posts/{id}', [PostController::class, 'single']);

Route::post('/posts', [PostController::class, 'store']);

// Route::delete('/posts/{post}', function(Post $post) {
//     $success = $post->delete();

//     return [
//         'success' => $success
//     ];
// });



// Route::put(`/posts/{post}`, function(Post $post) {
//     try {
//         request()->validate([
//             'title' => 'required',
//             'content' => 'required',
//         ]);

//         $success = $post->update([
//             'title' => request('title'),
//             'content' => request('content')
//         ]);

//         return [
//             'success' => $success
//         ];
//     } catch(\Exception $e) {
//         \Log::error($e->getMessage());
//     }
// });

// Route::put('/posts/{post}', function (Post $post) {

//     request()->validate(['title' => 'required', 'content' => 'required',]);

//     try {
//         \DB::beginTransaction();

//         $success = $post->update(['title' => request('title'), 'content' => request('content')]);

//         \DB::commit();

//         return ['success' => $success];
//     } catch (\Exception $e) {
//         \DB::rollBack();
//         \Log::error($e->getMessage());

//         return ['success' => false];
//     }
// });








