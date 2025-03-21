<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;


class TodoController extends Controller
{
    public function index(): Response
    {
        $todos = Todo::select(['id', 'text', 'completed'])
            ->orderBy('completed')     //las completadas se ponen al final//
            ->orderByDesc('id')       //Las incompletadas se ponen al principio//
            ->get();

            return Inertia::render('Todos/TodoList', [
                'todos' => $todos->toArray(),
                'status' => session('status'),
            ]);
    }


    public function store (Request $request): RedirectResponse{
        $request->validate([
            'text' => 'required|min:2',
        ]);

        Todo::create([
            'text' => $request['text'],
            'completed' => false,
        ]);

        return back()->with('status', 'To-do added successfully!');
    }

    public function complete(int $id):RedirectResponse{
        Todo::findOrFail($id)->fill(['completed' => true])->update();

        return back()->with('status', 'To-do marked as completed!');
    }
    public function restore(int $id):RedirectResponse{
        Todo::findOrFail($id)->fill(['completed' => false])->update();
        return back()->with('status', 'To-do restored from completed!');
    }
    public function destroy(int $id):RedirectResponse{
        Todo::destroy($id);
        return back()->with('status', 'To-do deleted successfully!');
    }


}
