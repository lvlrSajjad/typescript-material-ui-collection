"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const react_native_material_ripple_1 = require("react-native-material-ripple");
// Styles
const navBarHeight = (react_native_1.Platform.OS === "ios") ? 64 : 54;
const { width, height } = react_native_1.Dimensions.get("window");
const screenHeight = width < height ? height : width;
class MaterialBackdrop extends react_1.Component {
    constructor(props) {
        super(props);
        this.ViewScale = new react_native_1.Animated.Value(0);
        this.collapse = () => {
            this.setState({ isExpanded: false }, () => {
                if (this.props.onCollapse) {
                    this.props.onCollapse();
                }
            });
            react_native_1.Animated.timing(this.ViewScale, {
                useNativeDriver: true,
                toValue: 0,
                duration: 200,
            }).start();
        };
        this.expand = () => {
            this.setState({ isExpanded: true }, () => {
                if (this.props.onExpand) {
                    this.props.onExpand();
                }
            });
            react_native_1.Animated.timing(this.ViewScale, {
                useNativeDriver: true,
                toValue: this.state.height,
                duration: 200,
            }).start();
        };
        this.state = { isExpanded: false, height: 0 };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1 } },
            React.createElement(react_native_1.View, { style: {
                    backgroundColor: this.props.backdropBackgroundColor,
                    paddingTop: navBarHeight,
                    height: screenHeight,
                    paddingBottom: 16,
                } },
                this.props.leftButtonIcon &&
                    React.createElement(react_native_material_ripple_1.default, { style: {
                            width: 56,
                            height: 56,
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }, onPress: () => {
                            if (this.props.onLeftButtonClick) {
                                this.props.onLeftButtonClick();
                            }
                            this.state.isExpanded ? this.collapse() : this.expand();
                        } },
                        React.createElement(MaterialCommunityIcons_1.default, { name: this.props.leftButtonIcon, size: 24, color: this.props.textColor })),
                this.props.rightButtonIcon &&
                    React.createElement(react_native_material_ripple_1.default, { style: {
                            width: 56,
                            height: 56,
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }, onPress: () => {
                            if (this.props.onRightButtonClick) {
                                this.props.onRightButtonClick();
                            }
                            this.state.isExpanded ? this.collapse() : this.expand();
                        } },
                        React.createElement(MaterialCommunityIcons_1.default, { name: this.props.rightButtonIcon, size: 24, color: this.props.textColor })),
                React.createElement(react_native_1.Text, { style: {
                        alignSelf: 'center',
                        position: 'absolute',
                        color: this.props.textColor,
                        top: 18
                    } }, this.state.isExpanded ? this.props.expandedTitle : this.props.collapsedTitle),
                React.createElement(react_native_1.Animated.View, null,
                    React.createElement(react_native_1.ScrollView, { style: { position: 'absolute', width: '100%', maxHeight: screenHeight - navBarHeight }, onLayout: (event) => {
                            const { height } = event.nativeEvent.layout;
                            this.setState({ height: height > screenHeight - navBarHeight - 1 ? screenHeight - 2 * navBarHeight - 16 : height });
                        } }, this.props.revealComponent()))),
            React.createElement(react_native_1.Animated.View, { style: {
                    transform: [
                        { translateY: this.ViewScale },
                    ],
                    position: 'absolute',
                    top: navBarHeight,
                    backgroundColor: this.props.contentBackgroundColor,
                    flex: 1,
                    right: 0,
                    left: 0,
                    maxHeight: screenHeight - navBarHeight,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    minHeight: navBarHeight,
                    elevation: 4,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowRadius: 4,
                    shadowOpacity: 0.24
                } },
                this.props.subHeaderText &&
                    React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: () => {
                            this.collapse();
                            if (this.props.onSubheaderClick) {
                                this.props.onSubheaderClick();
                            }
                        }, style: { height: 40, paddingBottom: 8, width: '100%' } },
                        React.createElement(react_native_1.Text, { style: {
                                margin: 16,
                                fontSize: 16,
                                color: this.props.subheaderTextColor
                            } }, this.props.subHeaderText)),
                React.createElement(react_native_1.ScrollView, { horizontal: this.props.horizontalContent, style: { width: '100%', padding: 16, marginTop: 16 } }, this.props.content()))));
    }
}
MaterialBackdrop.defaultProps = {
    revealComponent: () => null,
    content: () => null,
    onSubheaderClick: () => { },
    onLeftButtonClick: () => { },
    onRightButtonClick: () => { },
    onExpand: () => { },
    onCollapse: () => { }
};
exports.default = MaterialBackdrop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxCYWNrZHJvcFxcaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUFnQztBQUNoQywrQ0FBNkc7QUFDN0csNkZBQXFGO0FBQ3JGLCtFQUFrRDtBQUNsRCxTQUFTO0FBQ1QsTUFBTSxZQUFZLEdBQUcsQ0FBQyx1QkFBUSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDdkQsTUFBTSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyx5QkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxNQUFNLFlBQVksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQXVDckQsTUFBcUIsZ0JBQWlCLFNBQVEsaUJBQXVEO0lBYWpHLFlBQVksS0FBSztRQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQWJqQixjQUFTLEdBQUcsSUFBSSx1QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQXNJbEMsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUMzQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsdUJBQVEsQ0FBQyxNQUFNLENBQ1gsSUFBSSxDQUFDLFNBQVMsRUFDZDtnQkFDSSxlQUFlLEVBQUUsSUFBSTtnQkFDckIsT0FBTyxF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QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFRLENBQ2pCO2dCQUUzQixvQkFBQyx5QkFBVSxJQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUN4QyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxJQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUNaLENBQ0QsQ0FDYixDQUNWLENBQUE7SUFDTCxDQUFDOztBQWxJTSw2QkFBWSxHQUFHO0lBQ2xCLGVBQWUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJO0lBQzFCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0lBQ25CLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUM7SUFDMUIsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztJQUMzQixrQkFBa0IsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO0lBQzVCLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO0lBQ2xCLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO0NBQ3ZCLENBQUM7QUFYTixtQ0FxS0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxCYWNrZHJvcFxcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VmlldywgQW5pbWF0ZWQsIFNjcm9sbFZpZXcsIFRleHQsIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFjaywgUGxhdGZvcm0sIERpbWVuc2lvbnN9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcbmltcG9ydCBNYXRlcmlhbENvbW11bml0eUljb25zIGZyb20gJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxDb21tdW5pdHlJY29ucydcbmltcG9ydCBSaXBwbGUgZnJvbSAncmVhY3QtbmF0aXZlLW1hdGVyaWFsLXJpcHBsZSc7XG4vLyBTdHlsZXNcbmNvbnN0IG5hdkJhckhlaWdodCA9IChQbGF0Zm9ybS5PUyA9PT0gXCJpb3NcIikgPyA2NCA6IDU0O1xuY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gRGltZW5zaW9ucy5nZXQoXCJ3aW5kb3dcIik7XG5jb25zdCBzY3JlZW5IZWlnaHQgPSB3aWR0aCA8IGhlaWdodCA/IGhlaWdodCA6IHdpZHRoO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsQmFja2Ryb3BQcm9wcyB7XG4gICAgcmV2ZWFsQ29tcG9uZW50PygpOiBSZWFjdC5SZWFjdE5vZGUsXG5cbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvcj86IHN0cmluZyxcbiAgICBsZWZ0QnV0dG9uSWNvbj86IHN0cmluZyxcbiAgICBleHBhbmRlZFRpdGxlPzogc3RyaW5nLFxuICAgIGNvbGxhcHNlZFRpdGxlPzogc3RyaW5nLFxuXG4gICAgY29udGVudD8oKTogUmVhY3QuUmVhY3ROb2RlLFxuXG4gICAgdGV4dENvbG9yPzogc3RyaW5nLFxuICAgIHN1YkhlYWRlclRleHQ/OiBzdHJpbmcsXG4gICAgaG9yaXpvbnRhbENvbnRlbnQ/OiBib29sZWFuLFxuXG4gICAgb25TdWJoZWFkZXJDbGljaz8oKTogdm9pZCxcblxuICAgIG9uTGVmdEJ1dHRvbkNsaWNrPygpOiB2b2lkLFxuXG4gICAgb25SaWdodEJ1dHRvbkNsaWNrPygpOiB2b2lkLFxuXG4gICAgY29udGVudEJhY2tncm91bmRDb2xvcj86IHN0cmluZyxcbiAgICBzdWJoZWFkZXJUZXh0Q29sb3I/OiBzdHJpbmcsXG5cbiAgICBvbkV4cGFuZD8oKTogdm9pZCxcblxuICAgIG9uQ29sbGFwc2U/KCk6IHZvaWQsXG5cbiAgICByaWdodEJ1dHRvbkljb24/OiBzdHJpbmdcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsQmFja2Ryb3BTdGF0ZSB7XG4gICAgaXNFeHBhbmRlZDogYm9vbGVhbixcbiAgICBoZWlnaHQ6IG51bWJlclxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQmFja2Ryb3AgZXh0ZW5kcyBDb21wb25lbnQ8TWF0ZXJpYWxCYWNrZHJvcFByb3BzLCBNYXRlcmlhbEJhY2tkcm9wU3RhdGU+IHtcbiAgICBWaWV3U2NhbGUgPSBuZXcgQW5pbWF0ZWQuVmFsdWUoMCk7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXZlYWxDb21wb25lbnQ6KCkgPT4gbnVsbCxcbiAgICAgICAgY29udGVudDogKCkgPT4gbnVsbCxcbiAgICAgICAgb25TdWJoZWFkZXJDbGljazogKCkgPT4ge30sXG4gICAgICAgIG9uTGVmdEJ1dHRvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgb25SaWdodEJ1dHRvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgb25FeHBhbmQ6ICgpID0+IHt9LFxuICAgICAgICBvbkNvbGxhcHNlOiAoKSA9PiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNFeHBhbmRlZDogZmFsc2UsIGhlaWdodDogMH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5iYWNrZHJvcEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogbmF2QmFySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNjcmVlbkhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTYsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxlZnRCdXR0b25JY29uICYmXG4gICAgICAgICAgICAgICAgICAgIDxSaXBwbGUgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICB9fSBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxlZnRCdXR0b25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25MZWZ0QnV0dG9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKClcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxDb21tdW5pdHlJY29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubGVmdEJ1dHRvbkljb259IHNpemU9ezI0fSBjb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yaWdodEJ1dHRvbkljb24gJiZcbiAgICAgICAgICAgICAgICAgICAgPFJpcHBsZSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICB9fSBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJpZ2h0QnV0dG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUmlnaHRCdXR0b25DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbENvbW11bml0eUljb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5yaWdodEJ1dHRvbkljb259IHNpemU9ezI0fSBjb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxOFxuICAgICAgICAgICAgICAgICAgICB9fT57dGhpcy5zdGF0ZS5pc0V4cGFuZGVkID8gdGhpcy5wcm9wcy5leHBhbmRlZFRpdGxlIDogdGhpcy5wcm9wcy5jb2xsYXBzZWRUaXRsZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6IHNjcmVlbkhlaWdodCAtIG5hdkJhckhlaWdodH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25MYXlvdXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7aGVpZ2h0fSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmxheW91dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHQ6IGhlaWdodCA+IHNjcmVlbkhlaWdodCAtIG5hdkJhckhlaWdodCAtIDEgPyBzY3JlZW5IZWlnaHQgLSAyICogbmF2QmFySGVpZ2h0IC0gMTYgOiBoZWlnaHR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJldmVhbENvbXBvbmVudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkLlZpZXc+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZVk6IHRoaXMuVmlld1NjYWxlfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogbmF2QmFySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuY29udGVudEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogc2NyZWVuSGVpZ2h0IC0gbmF2QmFySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAxNixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDE2LFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG5hdkJhckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uOiA0LFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd09wYWNpdHk6IDAuMjRcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3ViSGVhZGVyVGV4dCAmJlxuICAgICAgICAgICAgICAgICAgICA8VG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3ViaGVhZGVyQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN1YmhlYWRlckNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiA0MCwgcGFkZGluZ0JvdHRvbTogOCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLnN1YmhlYWRlclRleHRDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pnt0aGlzLnByb3BzLnN1YkhlYWRlclRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZVdpdGhvdXRGZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldyBob3Jpem9udGFsPXt0aGlzLnByb3BzLmhvcml6b250YWxDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJScsIHBhZGRpbmc6IDE2LCBtYXJnaW5Ub3A6IDE2fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVkLlZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb2xsYXBzZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFeHBhbmRlZDogZmFsc2V9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbGxhcHNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBBbmltYXRlZC50aW1pbmcoXG4gICAgICAgICAgICB0aGlzLlZpZXdTY2FsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VOYXRpdmVEcml2ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdG9WYWx1ZTogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBleHBhbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRXhwYW5kZWQ6IHRydWV9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkV4cGFuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25FeHBhbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIEFuaW1hdGVkLnRpbWluZyhcbiAgICAgICAgICAgIHRoaXMuVmlld1NjYWxlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b1ZhbHVlOiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApLnN0YXJ0KCk7XG4gICAgfVxufVxuIl0sInZlcnNpb24iOjN9