"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const indicator_1 = require("../indicator");
const styles_1 = require("./styles");
class MaterialIndicator extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.renderComponent = this.renderComponent.bind(this);
    }
    renderComponent({ index, count, progress }) {
        count = count;
        let { size, color, animationDuration } = this.props;
        let frames = 60 * animationDuration / 1000;
        let easing = react_native_1.Easing.bezier(0.4, 0.0, 0.7, 1.0);
        let inputRange = Array
            .from(new Array(frames), (undefined = { undefined }, frameIndex) => frameIndex / (frames - 1));
        let outputRange = Array
            .from(new Array(frames), (undefined, frameIndex) => {
            undefined = undefined;
            let progress = 2 * frameIndex / (frames - 1);
            let rotation = index
                ? +(360 - 15)
                : -(180 - 15);
            if (progress > 1.0) {
                progress = 2.0 - progress;
            }
            let direction = index
                ? -1
                : +1;
            return (direction * (180 - 30) * easing(progress) + rotation) + 'deg';
        });
        let layerStyle = {
            width: size,
            height: size,
            transform: [{
                    rotate: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [(0 + 30 + 15) + 'deg', (2 * 360 + 30 + 15) + 'deg']
                    })
                }]
        };
        let viewportStyle = {
            width: size,
            height: size,
            transform: [{
                    translateY: index ? -size / 2 : 0
                }, {
                    rotate: progress.interpolate({ inputRange, outputRange })
                }]
        };
        let containerStyle = {
            width: size,
            height: size / 2,
            overflow: 'hidden'
        };
        let offsetStyle = index
            ? { top: size / 2 }
            : null;
        let lineStyle = {
            width: size,
            height: size,
            borderColor: color,
            borderWidth: size / 10,
            borderRadius: size / 2
        };
        return (React.createElement(react_native_1.Animated.View, Object.assign({ style: styles_1.default.layer }, { key: index }),
            React.createElement(react_native_1.Animated.View, { style: layerStyle },
                React.createElement(react_native_1.Animated.View, { style: [containerStyle, offsetStyle], collapsable: false },
                    React.createElement(react_native_1.Animated.View, { style: viewportStyle },
                        React.createElement(react_native_1.Animated.View, { style: containerStyle, collapsable: false },
                            React.createElement(react_native_1.Animated.View, { style: lineStyle })))))));
    }
    render() {
        let _a = this.props, { style, size: width, size: height } = _a, props = __rest(_a, ["style", "size", "size"]);
        return (React.createElement(react_native_1.View, { style: [styles_1.default.container, style] },
            React.createElement(indicator_1.default, Object.assign({ style: { width, height }, renderComponent: this.renderComponent }, props, { count: 2 }))));
    }
}
MaterialIndicator.defaultProps = {
    animationDuration: 2400,
    color: 'rgb(0, 0, 0)',
    size: 40
};
exports.default = MaterialIndicator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxQcm9ncmVzc1xcTWF0ZXJpYWxJbmRpY2F0b3JcXG1hdGVyaWFsLWluZGljYXRvclxcaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUFzQztBQUV0QywrQ0FBcUQ7QUFFckQsNENBQXFEO0FBQ3JELHFDQUE2QjtBQVM3QixNQUFxQixpQkFBa0IsU0FBUSxxQkFBcUM7SUFPaEYsWUFBYSxLQUFLO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsZUFBZSxDQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVwRCxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksTUFBTSxHQUFHLHFCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksVUFBVSxHQUFHLEtBQUs7YUFDakIsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRixJQUFJLFdBQVcsR0FBRyxL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RSxhQUFhO3dCQUMvQixvQkFBQyx1QkFBUSxDQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxLQUFLOzRCQUNwRCxvQkFBQyx1QkFBUSxDQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsU0FBUyxHQUFJLENBQ3ZCLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDbkIsQ0FBQTtJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxlQUEyRCxFQUEzRCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLE9BQXlCLEVBQXZCLDZDQUF1QixDQUFDO1FBRWhFLE9BQU8sQ0FDSCxvQkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLGdCQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUNsQyxvQkFBQyxtQkFBUyxrQkFDTixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxJQUNqQyxLQUFLLElBQ1QsS0FBSyxFQUFFLENBQUMsSUFDVixDQUNDLENBQ1YsQ0FBQTtJQUNMLENBQUM7O0FBNUdNLDhCQUFZLEdBQUc7SUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFMTixvQ0E4R0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxQcm9ncmVzc1xcTWF0ZXJpYWxJbmRpY2F0b3JcXG1hdGVyaWFsLWluZGljYXRvclxcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgVmlldywgQW5pbWF0ZWQsIEVhc2luZyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcblxuaW1wb3J0IEluZGljYXRvcix7SW5kaWNhdG9yUHJvcHN9IGZyb20gJy4uL2luZGljYXRvcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0ZXJpYWxJbmRpY2F0b3JQcm9wcyBleHRlbmRzIEluZGljYXRvclByb3Bze1xuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN0eWxlPzpvYmplY3RcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbEluZGljYXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8TWF0ZXJpYWxJbmRpY2F0b3JQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyNDAwLFxuICAgICAgICBjb2xvcjogJ3JnYigwLCAwLCAwKScsXG4gICAgICAgIHNpemU6IDQwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSB0aGlzLnJlbmRlckNvbXBvbmVudC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyQ29tcG9uZW50ICh7IGluZGV4LCBjb3VudCwgcHJvZ3Jlc3MgfSkge1xuICAgICAgICBjb3VudCA9IGNvdW50O1xuICAgICAgICBsZXQgeyBzaXplLCBjb2xvciwgYW5pbWF0aW9uRHVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGZyYW1lcyA9IDYwICogYW5pbWF0aW9uRHVyYXRpb24gLyAxMDAwO1xuICAgICAgICBsZXQgZWFzaW5nID0gRWFzaW5nLmJlemllcigwLjQsIDAuMCwgMC43LCAxLjApO1xuXG4gICAgICAgIGxldCBpbnB1dFJhbmdlID0gQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKG5ldyBBcnJheShmcmFtZXMpLCAodW5kZWZpbmVkPXt1bmRlZmluZWR9LCBmcmFtZUluZGV4KSA9PiBmcmFtZUluZGV4IC8gKGZyYW1lcyAtIDEpKTtcblxuICAgICAgICBsZXQgb3V0cHV0UmFuZ2UgPSBBcnJheVxuICAgICAgICAgICAgLmZyb20obmV3IEFycmF5KGZyYW1lcyksICh1bmRlZmluZWQsIGZyYW1lSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQ9dW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDIgKiBmcmFtZUluZGV4IC8gKGZyYW1lcyAtIDEpO1xuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgID8gKygzNjAgLSAxNSlcbiAgICAgICAgICAgICAgICAgICAgOiAtKDE4MCAtIDE1KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDIuMCAtIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgOiArMTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoZGlyZWN0aW9uICogKDE4MCAtIDMwKSAqIGVhc2luZyhwcm9ncmVzcykgKyByb3RhdGlvbikgKyAnZGVnJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxheWVyU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogW3tcbiAgICAgICAgICAgICAgICByb3RhdGU6IHByb2dyZXNzLmludGVycG9sYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRSYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRSYW5nZTogWygwICsgMzAgKyAxNSkgKyAnZGVnJywgKDIgKiAzNjAgKyAzMCArIDE1KSArICdkZWcnXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB2aWV3cG9ydFN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFt7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogaW5kZXggPyAtc2l6ZSAvIDIgOiAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRlOiBwcm9ncmVzcy5pbnRlcnBvbGF0ZSh7IGlucHV0UmFuZ2UsIG91dHB1dFJhbmdlIH0pXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplIC8gMixcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBvZmZzZXRTdHlsZSA9IGluZGV4XG4gICAgICAgICAgICA/IHsgdG9wOiBzaXplIC8gMiB9XG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgbGV0IGxpbmVTdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IHNpemUgLyAxMCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogc2l6ZSAvIDJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e3N0eWxlcy5sYXllcn0gey4uLnsga2V5OiBpbmRleCB9fT5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17bGF5ZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXtbY29udGFpbmVyU3R5bGUsIG9mZnNldFN0eWxlXX0gY29sbGFwc2FibGU9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXt2aWV3cG9ydFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNvbGxhcHNhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXtsaW5lU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkLlZpZXc+XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IHsgc3R5bGUsIHNpemU6IHdpZHRoLCBzaXplOiBoZWlnaHQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHN0eWxlXX0+XG4gICAgICAgICAgICAgICAgPEluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudD17dGhpcy5yZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9ezJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==