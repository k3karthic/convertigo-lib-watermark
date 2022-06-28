const base64ToStream = function(b64) {
	const imageBytes = base64.getDecoder().decode(b64);
	const imageStream = new java.io.ByteArrayInputStream(imageBytes);
	
	const readers = imageIO.getImageReaders(imageIO.createImageInputStream(imageStream));
	if (!readers.hasNext()) {
		throw new Error('Unsupported image format');
	}
	const reader = readers.next();
	
	imageStream.reset();
	
	return [reader.getFormatName(), imageStream];	
};

const base64ToBuffered = function(b64) {
	const imageBytes = base64.getDecoder().decode(b64);
	const imageStream = new java.io.ByteArrayInputStream(imageBytes);
	
	const readers = imageIO.getImageReaders(imageIO.createImageInputStream(imageStream));
	if (!readers.hasNext()) {
		throw new Error('Unsupported image format');
	}
	const reader = readers.next();
	
	imageStream.reset();
	
	return [reader.getFormatName(), imageIO.read(imageStream)];	
};

const bufferedToByteArray = function(buff) {
	const resultStream = new java.io.ByteArrayOutputStream();
	imageIO.write(buff, "jpg", resultStream);
	
	return resultStream.toByteArray();	
};

const parsePosition = function(pos) {
	switch (pos.toLowerCase().trim()) {
		case 'bottom_center': {
			return positions.BOTTOM_CENTER;
			break;
		}
		
		case 'bottom_left': {
			return positions.BOTTOM_LEFT;
			break;
		}
		
		case 'bottom_right': {
			return positions.BOTTOM_RIGHT;
			break;
		}
		
		case 'center': {
			return positions.CENTER;
			break;
		}
		
		case 'center_left': {
			return positions.CENTER_LEFT;
			break;
		}
		
		case 'center_right': {
			return positions.CENTER_RIGHT;
			break;
		}
		
		case 'top_center': {
			return positions.TOP_CENTER;
			break;
		}
		
		case 'top_left': {
			return positions.TOP_LEFT;
			break;
		}
		
		case 'top_right': {
			return positions.TOP_RIGHT;
			break;
		}
		
		default:
			throw new Error('Unknown position: ' + pos);
	}
};