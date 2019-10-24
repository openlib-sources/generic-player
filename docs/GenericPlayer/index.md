# GenericPlayer

## properties

### autosize

This is a property of [AutosizeManager](AutosizeManager.md).

This property helps you to manipulate the ratio or deactivate the autosize-functionality.



### config

This is a property of [ConfigurationManager](ConfigurationManager.md).

This property is used to configure the different player-classes.






## methods

### constructor(element: HTMLElement)

Creates a GenericPlayer-Instance with a valid element. The GenericPlayer try to find out, which player you want to import and replace the given element with this player. When the class couldn't find a player, it will ignore your tasks.



### play()

This method will play your video.

#### example

```javascript
const player = new GenericPlayer(document.getElementById('player'));
player.play();
```



### pause()

This method will pause your video.

#### example

```javascript
const player = new GenericPlayer(document.getElementById('player'));
player.play();
setTimeout(() => player.pause(), 5000);
```



### stop()

This method will stop your video and jumps back to the beginning.

#### example

```javascript
const player = new GenericPlayer(document.getElementById('player'));
player.play();
setTimeout(() => player.stop(), 5000);
```



### mute()

This method will mute your video.

#### example

```javascript
const player = new GenericPlayer(document.getElementById('player'));
player.mute();
```



### unmute()

This method will unmute your video.


#### example

```javascript
const player = new GenericPlayer(document.getElementById('player'));
player.unmute();
```