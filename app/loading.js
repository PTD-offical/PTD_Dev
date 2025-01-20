import React from 'react';
import "./CSS/Loader.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
<div class="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
</div>
    </div>
  );
};

export default Loading;
