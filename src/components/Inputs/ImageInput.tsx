import { AddIcon, Button, EditIcon, majorScale, Pane, PlusIcon, Spinner, TrashIcon } from 'evergreen-ui'
import React from 'react'
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";
import { Paragraph, Label } from 'evergreen-ui'

import { useState } from 'react'
import { No } from 'components/Text';
import delay from 'utils/delay';

interface Props {
    defaultValue?: string
    value: ImageListType
    onChange: (images: ImageListType) => any
    // initialImage: string
}
interface ImagePreviewProps {
    url: string;
    loading?: boolean
    onEdit?: (() => void) | undefined;
    onDelete: (() => void) | undefined;
    name?: string
}

const ImagePreview = ({ url, loading, onEdit, onDelete, name }: ImagePreviewProps) => {
    return <Pane paddingY={majorScale(1)} >
        <Pane>
            {loading ? <Spinner

            /> : <img style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} width='100%' src={url} />}
        </Pane>
        <Paragraph size={300} color="muted">{name}</Paragraph>
        <Pane display='flex' flexDirection='row'>
            {onEdit && <Button width='100%' onClick={onEdit} iconAfter={EditIcon} marginRight={majorScale(1)}>Update</Button>}
            <Button width='100%' intent='danger' iconAfter={TrashIcon} onClick={onDelete}>Remove</Button>
        </Pane>
    </Pane>
}


const ImageInput = ({ onChange, value, defaultValue }: Props) => {

    const [show, setShow] = useState(!!defaultValue?.length)

    if (show) {
        return <ImagePreview
            url={defaultValue ?? ''}
            onDelete={() => {
                setShow(false)
                onChange([])
            }}
        />
    }


    return <Pane marginBottom={majorScale(3)}>
        <ImageUploading
            value={value}
            onChange={(files) => {
                onChange(files)
            }}
            acceptType={["jpg", "png", "jpeg", "webp"]}
            maxFileSize={5 * 1024 * 1024}
        >
            {({ imageList, onImageUpload, errors, onImageUpdate, onImageRemove }) => {

                const RenderErrors = () => {
                    return <Pane >

                        {errors?.acceptType &&
                            <span>Your selected file type is not allowed</span>}
                        {errors?.maxFileSize && <No color='red'>Selected file size exceeds 5mb</No>}
                    </Pane>;
                };

                return <Pane marginTop={majorScale(1)}>
                    <Pane>
                        {!imageList.length && <Button
                            iconAfter={PlusIcon}
                            onClick={onImageUpload}

                        >Select Image</Button>}
                        <Pane
                        >
                            {(imageList ?? []).map((image, index) =>
                                <>
                                    <ImagePreview
                                        key={image.key}
                                        url={image?.dataURL ?? ''}
                                        onEdit={() => onImageUpdate(index)}
                                        name={image.file?.name}
                                        onDelete={() => onImageRemove(index)}
                                    />

                                </>
                            )}
                        </Pane>
                    </Pane>
                    {hasError(errors) && <RenderErrors />}
                </Pane>;
            }}
        </ImageUploading>
    </Pane>
}

function hasError(obj: any) {
    for (var key in obj) {
        if (obj[key] === true) return true;
    }
    return false;
}


export default ImageInput

