declare namespace pc {
    /**
     * @component
     * @name pc.SpriteComponent
     * @extends pc.Component
     * @class Enables an Entity to render a simple static sprite or sprite animations.
     * @description Create a new Sprtie Component.
     * @param {pc.CameraComponentSystem} system The ComponentSystem that created this Component.
     * @param {pc.Entity} entity The Entity that this Component is attached to.
     * @example
     * // Add a pc.SpriteComponent to an entity
     * var entity = new pc.Entity();
     * entity.addComponent('sprite', {
     * });
     * @example
     * // Get the pc.CameraComponent on an entity
     * var spriteComponent = entity.sprite;
     * @example
     * // Update a property on a camera component
     * entity.camera.nearClip = 2;
     * @property {Number} projection The type of projection used to render the camera. Can be:
     * <ul>
     *     <li>{@link pc.PROJECTION_PERSPECTIVE}: A perspective projection. The camera frustum resembles a truncated pyramid.</li>
     *     <li>{@link pc.PROJECTION_ORTHOGRAPHIC}: An orthographic projection. The camera frustum is a cuboid.</li>
     * </ul>
     * Defaults to pc.PROJECTION_PERSPECTIVE.
     * @property {Number} nearClip The distance from the camera before which no rendering will take place.
     * @property {Number} farClip The distance from the camera after which no rendering will take place.
     * @property {Number} aspectRatio The aspect ratio of the camera. This is the ratio of width divided by height. Default to 16/9.
     * @property {Boolean} horizontalFov Set which axis to use for the Field of View calculation. Defaults to false (use Y-axis).
     * @property {Number} fov The field of view of the camera in degrees. Usually this is the Y-axis field of
     * view, see {@link pc.CameraComponent#horizontalFov}. Used for {@link pc.PROJECTION_PERSPECTIVE} cameras only. Defaults to 45.
     * @property {Number} orthoHeight The half-height of the orthographic view window (in the Y-axis). Used for
     * {@link pc.PROJECTION_ORTHOGRAPHIC} cameras only. Defaults to 10.
     * @property {Number} priority Controls the order in which cameras are rendered. Cameras with smaller values for priority are rendered first.
     * @property {pc.Color} clearColor The color used to clear the canvas to before the camera starts to render.
     * @property {Boolean} clearColorBuffer If true the camera will clear the color buffer to the color set in clearColor.
     * @property {Boolean} clearDepthBuffer If true the camera will clear the depth buffer.
     * @property {Boolean} clearStencilBuffer If true the camera will clear the stencil buffer.
     * @property {pc.Vec4} rect Controls where on the screen the camera will be rendered in normalized screen coordinates.
     * @property {pc.Vec4} scissorRect Clips all pixels which are not in the rectangle.
     * The order of the values is [x, y, width, height].
     * @property {pc.RenderTarget} renderTarget The render target of the camera. Defaults to null, which causes
     * the camera to render to the canvas' back buffer. Setting a valid render target effectively causes the camera
     * to render to an offscreen buffer, which can then be used to achieve certain graphics effect (normally post
     * effects).
     * @property {pc.PostEffectQueue} postEffects The post effects queue for this camera. Use this to add or remove post effects from the camera.
     * @property {Boolean} frustumCulling Controls the culling of mesh instances against the camera frustum. If true, culling is enabled.
     * If false, all mesh instances in the scene are rendered by the camera, regardless of visibility. Defaults to false.
     * @property {Function} calculateTransform Custom function you can provide to calculate the camera transformation matrix manually. Can be used for complex effects like reflections. Function is called using component's scope.
     * Arguments:
     *     <li>{pc.Mat4} transformMatrix: output of the function</li>
     *     <li>{Number} view: Type of view. Can be pc.VIEW_CENTER, pc.VIEW_LEFT or pc.VIEW_RIGHT. Left and right are only used in stereo rendering.</li>
     * @property {Function} calculateProjection Custom function you can provide to calculate the camera projection matrix manually. Can be used for complex effects like doing oblique projection. Function is called using component's scope.
     * Arguments:
     *     <li>{pc.Mat4} transformMatrix: output of the function</li>
     *     <li>{Number} view: Type of view. Can be pc.VIEW_CENTER, pc.VIEW_LEFT or pc.VIEW_RIGHT. Left and right are only used in stereo rendering.</li>
     * @property {Boolean} cullFaces If true the camera will take material.cull into account. Otherwise both front and back faces will be rendered.
     * @property {Boolean} flipFaces If true the camera will invert front and back faces. Can be useful for reflection rendering.
     */
    class SpriteComponent extends pc.Component {
        constructor(system: pc.SpriteComponentSystem, entity: pc.Entity)

    //     projection: number;
    //     nearClip: number;
    //     farClip: number;
    //     aspectRatio: number;
    //     horizontalFov: boolean;
    //     fov: number;
    //     orthoHeight: number;
    //     priority: number;
    //     clearColor: pc.Color;
    //     clearColorBuffer: boolean;
    //     clearDepthBuffer: boolean;
    //     clearStencilBuffer: boolean;
    //     rect: pc.Vec4;
    //     scissorRect: pc.Vec4;
    //     renderTarget: pc.RenderTarget;
    //     postEffects: pc.PostEffectQueue;
    //     frustumCulling: boolean;
    //     calculateTransform: Function;
    //     calculateProjection: Function;
    //     cullFaces: boolean;
    //     flipFaces: boolean;
    // }
    }
}

/**
 * This is something added at 30/07/2019 at 13:21
 * It will be updated at jorgepresentcreative/DefinitelyTyped
 * and it should be reflected when I update the Galaxy Rougue project
 * 
 * Hi!! It worked!!
 * 
 */