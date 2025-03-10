interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar" style={{ opacity: progress > 0 ? 1 : 0 }}>
      {/* Width of the progress bar is dynamically set based on the 'progress' prop */}
      <div
        className="progress"
        style={{ width: `${progress}%`, opacity: progress > 0 ? 1 : 0 }}
      />
    </div>
  );
};

export default ProgressBar;
