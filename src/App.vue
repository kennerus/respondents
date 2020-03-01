<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  body {
    margin: 0;

    font-size: 16px;
  }

  body * {
    box-sizing: border-box;

    letter-spacing: 0.5px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  :root {
    --clr-green: #93bc02;
    --clr-light-green: #c1e837;
    --clr-mid-green: #e7f6db;
    --clr-ultra-light-green: #fafff8;
    --clr-dark-green: #157c2b;
    --clr-red: #ff0f00;
    --clr-light-red: #ffd2d2;
    --clr-brown: #a37200;
    --clr-light-brown: #f7f1e3;
    --clr-ultra-light-brown: #fffcf5;
    --clr-blue: #2248a6;
    --clr-mid-blue: #e5f0fa;
    --clr-light-blue: #f8faff;
    --clr-gray: #aeaeae;
    --clr-mid-gray: #ededed;
    --clr-light-gray: #f7f7f7;
    --border-solid-light-green: solid var(--clr-light-green);
    --border-solid-transparent: solid transparent;

    --border-sm-light-green: 1px var(--border-solid-light-green);
    --border-mid-light-green: 2px var(--border-solid-light-green);
    --border-big-light-green: 3px var(--border-solid-light-green);

    --border-sm-transparent: 1px var(--border-solid-transparent);
    --border-mid-transparent: 2px var(--border-solid-transparent);
    --border-big-transparent: 3px var(--border-solid-transparent);

    --border-mid-gray: 2px solid var(--clr-mid-gray);
  }

  .container {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }

  .fieldset {
    padding: 0;
    border: none;
  }

  .input {
    width: 100%;
    padding: 10px;

    border: var(--border-mid-gray);
    border-radius: 6px;
  }

  .th, td {
    text-align: left;
  }

  .td-20, .th-20 {
    width: 20%;
  }

  .td-80, .th-80 {
    width: 80%;
  }

  .td_capitalize {
    text-transform: capitalize;
  }

  .select {
    padding: 10px;

    border: var(--border-mid-gray);
    border-radius: 6px;
  }

  .d-flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-inline-column {
    display: inline-flex;
    flex-direction: column;
  }

  .flex-align-center {
    align-items: center;
  }

  .flex-space-between {
    justify-content: space-between;
  }

  .full-width {
    width: 100%;
  }

  .mt-auto {
    margin-top: auto;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mt-30 {
    margin-top: 30px;
  }

  .ml-5 {
    margin-left: 5px;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .ptb-20 {
    padding: 20px 0;
  }

  .p-30 {
    padding: 30px;
  }

  .fw-700 {
    font-weight: 700;
  }
</style>
