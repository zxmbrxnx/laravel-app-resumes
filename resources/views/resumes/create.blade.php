@extends('layouts.app')

@section('content')
    <div class="m-2">
        {{-- <resume-form></resume-form> --}}
        <resume-form :resume="{{ $resume }}"/>
    </div>
@endsection
