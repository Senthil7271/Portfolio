const { execFileSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

const inputVideo = path.resolve('gemini_generated_video_a6a7dc95.mp4');
const targetDir = path.resolve('public/videos');
const outputVideo = path.join(targetDir, 'tesla-intro.mp4');
const fullBackup = path.join(targetDir, 'tesla-intro-full.mp4');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy full video
fs.copyFileSync(inputVideo, fullBackup);
console.log('Copied full video to:', fullBackup);

// Cut strictly the first 5 seconds (00:00:00 to 00:00:05), removing the next 5 sec
const args = [
  '-y',
  '-ss', '00:00:00',
  '-i', inputVideo,
  '-t', '5',
  '-c:v', 'libx264',
  '-c:a', 'aac',
  '-movflags', '+faststart',
  outputVideo
];

console.log('Running ffmpeg from:', ffmpeg.path);
execFileSync(ffmpeg.path, args, { stdio: 'inherit' });
console.log('Successfully trimmed video to first 5 seconds at:', outputVideo);
