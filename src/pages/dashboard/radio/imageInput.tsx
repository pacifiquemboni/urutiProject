import React from "react";

type ImageInputsProps = {
  files: File[]; 
  values: { categoryPicture: string }; 
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onUrlChange: (url: string) => void;
};

const ImageInputs: React.FC<ImageInputsProps> = ({ files, values, onFileChange, onUrlChange }) => {
  return (
    <div className="flex flex-col w-1/2 border-r-2 justify-between">
      <input type="file" onChange={onFileChange} />
      {files.length > 0 && (
        <img src={URL.createObjectURL(files[0])} alt="Preview" className=" h-52 w-52" />
      )}
      
      <div className="flex flex-col p-1">
        <div>Or:</div>
        <input
        type="text"
        value={values.categoryPicture}
        onChange={(e) => onUrlChange(e.target.value)}
        placeholder="Enter image URL"
        className="border p-3 rounded-lg"
      />
      </div>

   

      
      
    </div>
  );
};

export default ImageInputs;
