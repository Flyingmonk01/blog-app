import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1">{label} </label>
            )}

            <Controller
                name={name || "Content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey="aakpm8vec8pznblii61ine4a0ufdn4u033n3czjh2z9n4p9k"
                        initialValue={defaultValue}
                        init={{
                            initialValue: { defaultValue },
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}

export default RTE;