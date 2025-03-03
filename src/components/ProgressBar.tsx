interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      {/* Width of the progress bar is dynamically set based on the 'progress' prop */}
      <div className="progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
