import { Component, createRef } from 'react';

/**
 * DragAndDrop Component
 * finderからDnDでファイルを持ってくるコンポーネント
 * reactのRefでイベントを無理やり強奪してpropsのhandleDropに指定された関数にFileListな連想配列を渡す
 * 複数ファイル選択対応
 */

class DragAndDrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
    };

    this.dropRef = createRef();
  }

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handledragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({dragging: true});
    }
  };
  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return;
    this.setState({dragging: false});
  };
  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({drag: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0    
    }
  };

  componentDidMount() {
    this.dragCounter = 0;
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handledragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  render() {
    return (
      <div ref={this.dropRef}>
        {this.props.children}
      </div>
    );
  }
}

export default DragAndDrop;
