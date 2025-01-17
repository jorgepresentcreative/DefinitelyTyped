// Type definitions for non-npm package playcanvas 0.221
// Project: https://github.com/playcanvas/engine
// Definitions by: Philippe Vaillancourt <https://github.com/Neoflash1979>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="webvr-api" />
/// <reference path="./engine/scriptype.d.ts" />
/// <reference path="./engine/core/debug.d.ts" />
/// <reference path="./engine/core/color.d.ts" />
/// <reference path="./engine/core/core.d.ts" />
/// <reference path="./engine/core/events.d.ts" />
/// <reference path="./engine/core/log.d.ts" />
/// <reference path="./engine/core/guid.d.ts" />
/// <reference path="./engine/core/inheritance.d.ts" />
/// <reference path="./engine/core/path.d.ts" />
/// <reference path="./engine/core/platform.d.ts" />
/// <reference path="./engine/core/time.d.ts" />
/// <reference path="./engine/core/tags.d.ts" />
/// <reference path="./engine/core/string.d.ts" />
/// <reference path="./engine/core/uri.d.ts" />
/// <reference path="./engine/anim/skeleton.d.ts" />
/// <reference path="./engine/anim/animation.d.ts" />
/// <reference path="./engine/audio/channel.d.ts" />
/// <reference path="./engine/audio/channel3d.d.ts" />
/// <reference path="./engine/asset/asset-registry.d.ts" />
/// <reference path="./engine/asset/asset.d.ts" />
/// <reference path="./engine/graphics/device.d.ts" />
/// <reference path="./engine/graphics/index-buffer.d.ts" />
/// <reference path="./engine/graphics/graphics.d.ts" />
/// <reference path="./engine/graphics/post-effect.d.ts" />
/// <reference path="./engine/graphics/program-library.d.ts" />
/// <reference path="./engine/graphics/shader.d.ts" />
/// <reference path="./engine/graphics/render-target.d.ts" />
/// <reference path="./engine/graphics/texture.d.ts" />
/// <reference path="./engine/graphics/vertex-buffer.d.ts" />
/// <reference path="./engine/graphics/transform-feedback.d.ts" />
/// <reference path="./engine/graphics/vertex-format.d.ts" />
/// <reference path="./engine/graphics/vertex-iterator.d.ts" />
/// <reference path="./engine/input/controller.d.ts" />
/// <reference path="./engine/input/element-input.d.ts" />
/// <reference path="./engine/input/game-pads.d.ts" />
/// <reference path="./engine/input/input.d.ts" />
/// <reference path="./engine/input/keyboard.d.ts" />
/// <reference path="./engine/input/mouse.d.ts" />
/// <reference path="./engine/input/touch.d.ts" />
/// <reference path="./engine/math/curve-set.d.ts" />
/// <reference path="./engine/math/curve.d.ts" />
/// <reference path="./engine/math/mat3.d.ts" />
/// <reference path="./engine/math/mat4.d.ts" />
/// <reference path="./engine/math/math.d.ts" />
/// <reference path="./engine/math/quat.d.ts" />
/// <reference path="./engine/math/vec2.d.ts" />
/// <reference path="./engine/math/vec3.d.ts" />
/// <reference path="./engine/math/vec4.d.ts" />
/// <reference path="./engine/net/http.d.ts" />
/// <reference path="./engine/resources/animation.d.ts" />
/// <reference path="./engine/resources/css.d.ts" />
/// <reference path="./engine/resources/cubemap.d.ts" />
/// <reference path="./engine/resources/loader.d.ts" />
/// <reference path="./engine/resources/material.d.ts" />
/// <reference path="./engine/resources/model.d.ts" />
/// <reference path="./engine/resources/script.d.ts" />
/// <reference path="./engine/resources/texture.d.ts" />
/// <reference path="./engine/script/script-registry.d.ts" />
/// <reference path="./engine/script/script.d.ts" />
/// <reference path="./engine/shape/bounding-box.d.ts" />
/// <reference path="./engine/shape/bounding-sphere.d.ts" />
/// <reference path="./engine/shape/oriented-box.d.ts" />
/// <reference path="./engine/shape/frustum.d.ts" />
/// <reference path="./engine/shape/plane.d.ts" />
/// <reference path="./engine/shape/ray.d.ts" />
/// <reference path="./engine/scene/basic-material.d.ts" />
/// <reference path="./engine/scene/batching.d.ts" />
/// <reference path="./engine/scene/graph-node.d.ts" />
/// <reference path="./engine/scene/camera.d.ts" />
/// <reference path="./engine/scene/lightmapper.d.ts" />
/// <reference path="./engine/scene/material.d.ts" />
/// <reference path="./engine/scene/mesh.d.ts" />
/// <reference path="./engine/scene/model.d.ts" />
/// <reference path="./engine/scene/morph.d.ts" />
/// <reference path="./engine/scene/pick.d.ts" />
/// <reference path="./engine/scene/scene.d.ts" />
/// <reference path="./engine/scene/procedural.d.ts" />
/// <reference path="./engine/scene/skin.d.ts" />
/// <reference path="./engine/scene/standard-material.d.ts" />
/// <reference path="./engine/sound/instance.d.ts" />
/// <reference path="./engine/sound/instance3d.d.ts" />
/// <reference path="./engine/sound/manager.d.ts" />
/// <reference path="./engine/sound/listener.d.ts" />
/// <reference path="./engine/sound/sound.d.ts" />
/// <reference path="./engine/vr/vr-display.d.ts" />
/// <reference path="./engine/vr/vr-manager.d.ts" />
/// <reference path="./engine/framework/entity.d.ts" />
/// <reference path="./engine/framework/application.d.ts" />
/// <reference path="./engine/framework/script.d.ts" />
/// <reference path="./engine/framework/components/component.d.ts" />
/// <reference path="./engine/framework/components/data.d.ts" />
/// <reference path="./engine/framework/components/registry.d.ts" />
/// <reference path="./engine/framework/components/system.d.ts" />
/// <reference path="./engine/framework/components/animation/component.d.ts" />
/// <reference path="./engine/framework/components/animation/system.d.ts" />
/// <reference path="./engine/framework/components/audio-listener/component.d.ts" />
/// <reference path="./engine/framework/components/audio-listener/system.d.ts" />
/// <reference path="./engine/framework/components/audio-source/component.d.ts" />
/// <reference path="./engine/framework/components/audio-source/system.d.ts" />
/// <reference path="./engine/framework/components/collision/system.d.ts" />
/// <reference path="./engine/framework/components/collision/component.d.ts" />
/// <reference path="./engine/framework/components/element/component.d.ts" />
/// <reference path="./engine/framework/components/element/system.d.ts" />
/// <reference path="./engine/framework/components/model/component.d.ts" />
/// <reference path="./engine/framework/components/model/system.d.ts" />
/// <reference path="./engine/framework/components/light/component.d.ts" />
/// <reference path="./engine/framework/components/light/system.d.ts" />
/// <reference path="./engine/framework/components/camera/component.d.ts" />
/// <reference path="./engine/framework/components/camera/post-effect-queue.d.ts" />
/// <reference path="./engine/framework/components/camera/system.d.ts" />
/// <reference path="./engine/framework/components/particle-system/component.d.ts" />
/// <reference path="./engine/framework/components/particle-system/system.d.ts" />
/// <reference path="./engine/framework/components/rigid-body.d.ts/component.d.ts" />
/// <reference path="./engine/framework/components/rigid-body.d.ts/constants.d.ts" />
/// <reference path="./engine/framework/components/rigid-body.d.ts/system.d.ts" />
/// <reference path="./engine/framework/components/screen/component.d.ts" />
/// <reference path="./engine/framework/components/screen/system.d.ts" />
/// <reference path="./engine/framework/components/script/component.d.ts" />
/// <reference path="./engine/framework/components/script/system.d.ts" />
/// <reference path="./engine/framework/components/text/font.d.ts" />
/// <reference path="./engine/framework/components/sound/component.d.ts" />
/// <reference path="./engine/framework/components/sound/constants.d.ts" />
/// <reference path="./engine/framework/components/sound/system.d.ts" />
/// <reference path="./engine/framework/components/sound/slot.d.ts" />
/// <reference path="./engine/framework/components/sprite/component.d.ts" />
/// <reference path="./engine/framework/components/sprite/system.d.ts" />
/// <reference path="./engine/framework/components/zone/component.d.ts" />
/// <reference path="./engine/framework/components/zone/system.d.ts" />
